using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;

namespace Macrothing.Api.Features.Brands;

[Authorize]
[ApiController]
[Route("/api/v1/brands")]
public class BrandsController : ControllerBase
{
  private readonly IMediator _mediator;
  private readonly ILogger<BrandsController> _logger;

  public BrandsController(
    IMediator mediator, ILogger<BrandsController> logger)
  {
    _mediator = mediator;
    _logger = logger;
  }

  [ProducesResponseType(200)]
  [ProducesResponseType(404)]
  [HttpGet("{id:int}", Name = "GetBrandSummary")]
  [RequiredScope(RequiredScopesConfigurationKey = "Scopes:Read")]
  public async Task<ActionResult<BrandSummaryDto>> GetBrandSummary(
    int id, CancellationToken cancellationToken)
  {
    var query = new GetBrandSummary.Query(id);
    var response = await _mediator.Send(query, cancellationToken);

    return Ok(response);
  }

  [ProducesResponseType(201)]
  [ProducesResponseType(422)]
  [HttpPost(Name = "CreateBrand")]
  [RequiredScope(RequiredScopesConfigurationKey = "Scopes:Write")]
  public async Task<ActionResult<BrandSummaryDto>> CreateBrand(
    [FromBody] CreateBrandRequest model, CancellationToken cancellationToken)
  {
    var command = new CreateBrand.Command(model);
    var response = await _mediator.Send(command, cancellationToken);

    return CreatedAtRoute("GetBrandSummary", new { response.Id }, response);
  }

  [ProducesResponseType(200)]
  [ProducesResponseType(404)]
  [ProducesResponseType(422)]
  [HttpPut("{id:int}", Name = "UpdateBrand")]
  [RequiredScope(RequiredScopesConfigurationKey = "Scopes:Write")]
  public async Task<ActionResult<BrandSummaryDto>> UpdateBrand(
    int id, [FromBody] UpdateBrandRequest model, CancellationToken cancellationToken)
  {
    var command = new UpdateBrand.Command(id, model);
    var response = await _mediator.Send(command, cancellationToken);

    return Ok(response);
  }

  [ProducesResponseType(204)]
  [ProducesResponseType(404)]
  [HttpDelete("{id:int}", Name = "DeleteBrand")]
  [RequiredScope(RequiredScopesConfigurationKey = "Scopes:Write")]
  public async Task<ActionResult> DeleteBrand(
    int id, CancellationToken cancellationToken)
  {
    var command = new DeleteBrand.Command(id);
    await _mediator.Send(command, cancellationToken);

    return NoContent();
  }

  [ProducesResponseType(200)]
  [HttpPost("bulk-delete", Name = "DeleteBrands")]
  [RequiredScope(RequiredScopesConfigurationKey = "Scopes:Write")]
  public async Task<ActionResult<int>> DeleteBrands(
    [FromBody] DeleteBrandsRequest model, CancellationToken cancellationToken)
  {
    var command = new DeleteBrands.Command(model);
    var response = await _mediator.Send(command, cancellationToken);

    return Ok(response);
  }
}
