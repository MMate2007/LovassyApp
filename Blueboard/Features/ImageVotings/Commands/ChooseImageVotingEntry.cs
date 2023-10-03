using Blueboard.Core.Auth.Permissions;
using Blueboard.Core.Auth.Services;
using Blueboard.Features.ImageVotings.Events;
using Blueboard.Infrastructure.Persistence;
using Blueboard.Infrastructure.Persistence.Entities;
using FluentValidation.Results;
using Helpers.WebApi.Exceptions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Blueboard.Features.ImageVotings.Commands;

public static class ChooseImageVotingEntry
{
    public class Command : IRequest
    {
        public int Id { get; set; }
        public RequestBody Body { get; set; }
    }

    public class RequestBody
    {
        public string? AspectKey { get; set; }
    }

    internal sealed class Handler : IRequestHandler<Command>
    {
        private readonly ApplicationDbContext _context;
        private readonly PermissionManager _permissionManager;
        private readonly IPublisher _publisher;
        private readonly UserAccessor _userAccessor;

        public Handler(ApplicationDbContext context, UserAccessor userAccessor, IPublisher publisher,
            PermissionManager permissionManager)
        {
            _context = context;
            _userAccessor = userAccessor;
            _publisher = publisher;
            _permissionManager = permissionManager;
        }

        public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
        {
            var entry = await _context.ImageVotingEntries.Include(e => e.ImageVoting)
                .ThenInclude(v => v.Choices.Where(c => c.UserId == _userAccessor.User.Id))
                .FirstOrDefaultAsync(e => e.Id == request.Id, cancellationToken);

            if (entry == null)
                throw new NotFoundException(nameof(ImageVotingEntry), request.Id);

            if (entry.ImageVoting.Type != ImageVotingType.SingleChoice)
                throw new BadRequestException("A megadott szavazás nem egy választásos szavazás");

            if (!entry.ImageVoting.Active &&
                !_permissionManager.CheckPermission(typeof(ImageVotingsPermissions.CreateImageVotingChoice)))
                throw new BadRequestException("A megadott szavazás nem aktív");

            if (entry.UserId == _userAccessor.User.Id)
                throw new BadRequestException("Nem szavazhatsz a saját képedre");

            if (entry.ImageVoting.Aspects.Any())
            {
                if (string.IsNullOrWhiteSpace(request.Body.AspectKey))
                    throw new ValidationException(new[]
                    {
                        new ValidationFailure(nameof(RequestBody.AspectKey), "A(z) 'AspectKey' mező nem lehet üres.")
                    });

                if (entry.ImageVoting.Aspects.All(a => a.Key != request.Body.AspectKey))
                    throw new ValidationException(new[]
                        { new ValidationFailure(nameof(RequestBody.AspectKey), "A megadott szempont nem létezik.") });

                if (entry.ImageVoting.Choices.Any(c => c.AspectKey == request.Body.AspectKey))
                    throw new BadRequestException("Már szavaztál erre a szempontra");

                entry.ImageVoting.Choices.Add(new ImageVotingChoice
                {
                    AspectKey = request.Body.AspectKey, UserId = _userAccessor.User.Id,
                    ImageVotingId = entry.ImageVotingId, ImageVotingEntryId = entry.Id
                });
            }
            else
            {
                if (entry.ImageVoting.Choices.Any())
                    throw new BadRequestException("Már szavaztál erre a szavazásra");

                entry.ImageVoting.Choices.Add(new ImageVotingChoice
                {
                    UserId = _userAccessor.User.Id, ImageVotingId = entry.ImageVotingId, ImageVotingEntryId = entry.Id
                });
            }

            await _context.SaveChangesAsync(cancellationToken);

            await _publisher.Publish(new ImageVotingChoicesUpdatedEvent(), cancellationToken);

            return Unit.Value;
        }
    }
}