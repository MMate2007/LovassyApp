using Mapster;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Sieve.Models;
using Sieve.Services;
using WebApi.Infrastructure.Persistence;

namespace WebApi.Features.Import.Queries;

public static class IndexUsers
{
    public class Query : IRequest<IEnumerable<Response>>
    {
        public SieveModel SieveModel { get; set; }
    }

    public class Response
    {
        public Guid Id { get; set; }
        public string OmCodeHashed { get; set; }
        public string PublicKey { get; set; }
    }

    internal sealed class Handler : IRequestHandler<Query, IEnumerable<Response>>
    {
        private readonly ApplicationDbContext _context;
        private readonly SieveProcessor _sieveProcessor;

        public Handler(ApplicationDbContext context, SieveProcessor sieveProcessor)
        {
            _context = context;
            _sieveProcessor = sieveProcessor;
        }

        public async Task<IEnumerable<Response>> Handle(Query request,
            CancellationToken cancellationToken)
        {
            var users = _context.Users;

            var filteredUsers = await _sieveProcessor.Apply(request.SieveModel, users).ToListAsync(cancellationToken);

            return filteredUsers.Adapt<IEnumerable<Response>>();
        }
    }
}