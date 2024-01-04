using AutoMapper;
using Macrotest.Api.Features;
using Macrothing.Api.Application;
using Macrothing.Api.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using QueryKit;
using QueryKit.Configuration;

namespace Macrothing.Api.Features.Brands;

public static class GetBrandSummaries
{
  public record Query(BrandPaginationParametersRequest Model) : IRequest<PagedList<BrandSummaryDto>>;

  public class Handler : IRequestHandler<Query, PagedList<BrandSummaryDto>>
  {
    private readonly AppDbContext _dbContext;
    private readonly IMapper _mapper;

    public Handler(AppDbContext dbContext, IMapper mapper)
    {
      _dbContext = dbContext;
      _mapper = mapper;
    }

    public async Task<PagedList<BrandSummaryDto>> Handle(Query request, CancellationToken cancellationToken)
    {
      var queryKitConfiguration = new AppQueryKitConfiguration();
      var queryKitData = new QueryKitData
      {
        Configuration = queryKitConfiguration
      };

      var collection = _dbContext.Brands.AsNoTracking();
      var appliedCollection = collection.ApplyQueryKit(queryKitData);

      var brandDtos = appliedCollection.Select(brand => _mapper.Map<BrandSummaryDto>(brand));

      return await PagedList<BrandSummaryDto>.CreateAsync(
        brandDtos,
        request.Model.PageNumber,
        request.Model.PageSize,
        cancellationToken
      );
    }
  }
}

public sealed class BrandPaginationParametersRequest : BasePaginationParams
{
}