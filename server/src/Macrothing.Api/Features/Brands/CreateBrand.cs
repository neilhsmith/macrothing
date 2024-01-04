using AutoMapper;
using FluentValidation;
using Macrothing.Api.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Macrothing.Api.Features.Brands;

public static class CreateBrand
{
  public record Command(CreateBrandRequest Model) : IRequest<BrandSummaryDto>;

  public class Handler : IRequestHandler<Command, BrandSummaryDto>
  {
    private readonly AppDbContext _dbContext;
    private readonly IMapper _mapper;

    public Handler(AppDbContext dbContext, IMapper mapper)
    {
      _dbContext = dbContext;
      _mapper = mapper;
    }

    public async Task<BrandSummaryDto> Handle(Command request, CancellationToken _)
    {
      var validator = new CreateBrandRequestValidator(_dbContext);
      await validator.ValidateAndThrowAsync(request.Model);

      var brand = _mapper.Map<Brand>(request.Model);

      await _dbContext.AddAsync(brand);
      await _dbContext.SaveChangesAsync();

      return _mapper.Map<BrandSummaryDto>(brand);
    }
  }
}

public class CreateBrandRequest
{
  public required string Name { get; set; }
}

public class CreateBrandRequestValidator : AbstractValidator<CreateBrandRequest>
{
  public CreateBrandRequestValidator(AppDbContext dbContext)
  {
    RuleFor(b => b.Name)
      .Length(1, 128)
      .MustAsync(async (name, cancellationToken) =>
        {
          var exists = await dbContext.Brands
            .AnyAsync(b => b.Name == name, cancellationToken);
          return !exists;
        })
      .WithMessage("{PropertyValue} is already taken.");
  }
}

public class CreateBrandRequestProfile : Profile
{
  public CreateBrandRequestProfile()
  {
    CreateMap<CreateBrandRequest, Brand>();
  }
}