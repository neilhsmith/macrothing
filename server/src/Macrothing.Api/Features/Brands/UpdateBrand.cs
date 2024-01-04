using AutoMapper;
using FluentValidation;
using Macrothing.Api.Data;
using Macrothing.Api.Exceptions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Macrothing.Api.Features.Brands;

public static class UpdateBrand
{
  public record Command(int Id, UpdateBrandRequest Model) : IRequest<BrandSummaryDto>;

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
      var validator = new UpdateBrandRequestValidator(request.Id, _dbContext);
      await validator.ValidateAndThrowAsync(request.Model);

      var brand = await _dbContext.Brands
        .FirstOrDefaultAsync(b => b.Id == request.Id);

      if (brand is null)
      {
        throw new NotFoundException(nameof(Brand), request.Id);
      }

      brand.Name = request.Model.Name;

      await _dbContext.SaveChangesAsync();

      return _mapper.Map<BrandSummaryDto>(brand);
    }
  }
}

public class UpdateBrandRequest
{
  public required string Name { get; set; }
}

public class UpdateBrandRequestValidator : AbstractValidator<UpdateBrandRequest>
{
  public UpdateBrandRequestValidator(int brandId, AppDbContext dbContext)
  {
    RuleFor(b => b.Name)
      .Length(1, 128)
      .MustAsync(async (name, cancellationToken) =>
        {
          var exists = await dbContext.Brands
            .AnyAsync(b => b.Id != brandId && b.Name == name, cancellationToken);
          return !exists;
        })
      .WithMessage("{PropertyValue} is already taken.");
  }
}