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

  public BrandsController(IMediator mediator, ILogger<BrandsController> logger)
  {
    _mediator = mediator;
    _logger = logger;
  }

  [ProducesResponseType(200)]
  [ProducesResponseType(404)]
  [HttpGet("{id:int}", Name = "GetBrandSummary")]
  [RequiredScope(RequiredScopesConfigurationKey = "Scopes:Read")]
  public async Task<ActionResult<BrandSummaryDto>> GetBrandSummary(int id, CancellationToken cancellationToken)
  {
    var query = new GetBrandSummary.Query(id);
    var response = await _mediator.Send(query, cancellationToken);

    return Ok(response);
  }

  [ProducesResponseType(201)]
  [ProducesResponseType(422)]
  [HttpPost(Name = "CreateBrand")]
  [RequiredScope(RequiredScopesConfigurationKey = "Scopes:Write")]
  public async Task<ActionResult<BrandSummaryDto>> CreateBrand([FromBody] CreateBrandRequest model)
  {
    var command = new CreateBrand.Command(model);
    var response = await _mediator.Send(command);

    return CreatedAtRoute("GetBrandSummary", new { response.Id }, response);
  }
}