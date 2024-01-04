using AutoMapper;
using Macrothing.Api.Data;
using Macrothing.Api.Exceptions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Macrothing.Api.Features.Brands;

public static class GetBrandSummary
{
  public record Query(int Id) : IRequest<BrandSummaryDto>;

  public class Handler : IRequestHandler<Query, BrandSummaryDto>
  {
    private readonly AppDbContext _dbContext;
    private readonly IMapper _mapper;

    public Handler(AppDbContext dbContext, IMapper mapper)
    {
      _dbContext = dbContext;
      _mapper = mapper;
    }

    public async Task<BrandSummaryDto> Handle(Query request, CancellationToken cancellationToken)
    {
      var brand = await _dbContext.Brands
         .FirstOrDefaultAsync(b => b.Id == request.Id, cancellationToken);

      if (brand is null)
      {
        throw new NotFoundException(nameof(Brand), request.Id);
      }

      return _mapper.Map<BrandSummaryDto>(brand);
    }
  }
}