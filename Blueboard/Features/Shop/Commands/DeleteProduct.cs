using Blueboard.Features.Shop.Events;
using Blueboard.Infrastructure.Persistence;
using Blueboard.Infrastructure.Persistence.Entities;
using Helpers.WebApi.Exceptions;
using MediatR;

namespace Blueboard.Features.Shop.Commands;

public static class DeleteProduct
{
    public class Command : IRequest
    {
        public int Id { get; set; }
    }

    internal sealed class Handler : IRequestHandler<Command>
    {
        private readonly ApplicationDbContext _context;
        private readonly IPublisher _publisher;

        public Handler(ApplicationDbContext context, IPublisher publisher)
        {
            _context = context;
            _publisher = publisher;
        }

        public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
        {
            var product = await _context.Products.FindAsync(request.Id);
            if (product == null) throw new NotFoundException(nameof(Product), request.Id);

            _context.Products.Remove(product);
            await _context.SaveChangesAsync(cancellationToken);

            await _publisher.Publish(new ProductsUpdatedEvent(), cancellationToken);

            return Unit.Value;
        }
    }
}