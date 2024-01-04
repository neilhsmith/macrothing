using Macrothing.Api.Data;
using Macrothing.Api.Exceptions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Macrothing.Api.Features.Brands;

public static class DeleteBrand
{
  public record Command(int Id) : IRequest;

  public class Handler : IRequestHandler<Command>
  {
    private readonly AppDbContext _dbContext;

    public Handler(AppDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    public async Task Handle(Command request, CancellationToken _)
    {
      var brand = await _dbContext.Brands
        .FirstOrDefaultAsync(b => b.Id == request.Id);

      if (brand is null)
      {
        throw new NotFoundException(nameof(Brand), request.Id);
      }

      _dbContext.Brands.Remove(brand);
      await _dbContext.SaveChangesAsync();
    }
  }
}