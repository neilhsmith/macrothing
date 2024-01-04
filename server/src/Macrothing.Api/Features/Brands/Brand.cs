using AutoMapper;

namespace Macrothing.Api.Features.Brands;

public class Brand : BaseEntity
{
  public required string Name { get; set; }
}

// ---

public class BrandSummaryDto
{
  public int Id { get; set; }
  public DateTime CreatedAt { get; set; }
  public DateTime? ModifiedAt { get; set; }

  public required string Name { get; set; }
}

// ---

public class BrandProfile : Profile
{
  public BrandProfile()
  {
    CreateMap<Brand, BrandSummaryDto>();
    CreateMap<BrandSummaryDto, Brand>();
  }
}