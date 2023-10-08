using Blueboard.Core.Auth.Permissions;
using Blueboard.Core.Auth.Services;
using Blueboard.Infrastructure.Persistence;
using Blueboard.Infrastructure.Persistence.Entities;
using Helpers.WebApi.Exceptions;
using Mapster;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Sieve.Models;
using Sieve.Services;

namespace Blueboard.Features.ImageVotings.Queries;

public static class IndexImageVotingEntryImages
{
    public class Query : IRequest<IEnumerable<Response>>
    {
        public int ImageVotingId { get; set; }
        public SieveModel SieveModel { get; set; }
    }

    public class Response
    {
        public int Id { get; set; }

        public string Filename { get; set; }
        public string OriginalFilename { get; set; }

        public string MimeType { get; set; }

        public string Path { get; set; }

        public Guid UserId { get; set; }

        public string Url { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }

    internal sealed class Handler : IRequestHandler<Query, IEnumerable<Response>>
    {
        private readonly ApplicationDbContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly PermissionManager _permissionManager;
        private readonly SieveProcessor _sieveProcessor;
        private readonly UserAccessor _userAccessor;

        public Handler(ApplicationDbContext context, UserAccessor userAccessor, PermissionManager permissionManager,
            SieveProcessor sieveProcessor, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _userAccessor = userAccessor;
            _permissionManager = permissionManager;
            _sieveProcessor = sieveProcessor;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<IEnumerable<Response>> Handle(Query request, CancellationToken cancellationToken)
        {
            var imageVoting = await _context.ImageVotings
                .FirstOrDefaultAsync(x => x.Id == request.ImageVotingId, cancellationToken);

            if (imageVoting == null)
                throw new NotFoundException(nameof(ImageVoting), request.ImageVotingId);

            var onlyOwn =
                !_permissionManager.CheckPermission(typeof(ImageVotingsPermissions.IndexImageVotingEntryImages));

            var fileUploads = _context.FileUploads
                .Where(x => x.Purpose == $"ImageVoting-{imageVoting.Id}" &&
                            (!onlyOwn || x.UserId == _userAccessor.User.Id))
                .AsNoTracking();

            var filteredFileUploads = _sieveProcessor.Apply(request.SieveModel, fileUploads);

            var response = (await filteredFileUploads.ToListAsync(cancellationToken)).Adapt<IEnumerable<Response>>();

            var responseList = response.ToList();
            foreach (var fileUpload in responseList)
                fileUpload.Url =
                    $"{_httpContextAccessor.HttpContext!.Request.Scheme}://{_httpContextAccessor.HttpContext.Request.Host}{_httpContextAccessor.HttpContext.Request.PathBase}/Files/{fileUpload.Filename}";

            return responseList;
        }
    }
}