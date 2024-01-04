using System.Collections.ObjectModel;
using System.Text.Json.Serialization;
using Macrothing.Api.Data;
using Macrothing.Api.Exceptions;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Macrothing.Api.Features.Brands;

public static class DeleteBrands
{
  public record Command(DeleteBrandsRequest Model) : IRequest<int>;

  public class Handler : IRequestHandler<Command, int>
  {
    private readonly AppDbContext _dbContext;

    public Handler(AppDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    public async Task<int> Handle(Command request, CancellationToken _)
    {
      return await _dbContext.Brands
        .Where(b => request.Model.Ids.Contains(b.Id))
        .ExecuteDeleteAsync();
    }
  }
}

public class DeleteBrandsRequest
{
  public required ICollection<int> Ids { get; set; }
}