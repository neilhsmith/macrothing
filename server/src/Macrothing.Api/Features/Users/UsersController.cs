
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Macrothing.Api.Features.Users;

[ApiController]
[Route("/api/users")]
public class UsersController : ControllerBase
{
  private readonly ILogger<UsersController> _logger;
  private readonly IMediator _mediator;

  public UsersController(ILogger<UsersController> logger, IMediator mediator)
  {
    _logger = logger;
    _mediator = mediator;
  }

  [ProducesResponseType(200)]
  [ProducesResponseType(422)]
  [HttpPost("initiate", Name = "InitiateUser")]
  public async Task<ActionResult<UserDto>> InitiateUser(
    [FromBody] InitiateUserRequest model, CancellationToken cancellationToken)
  {
    var command = new InitiateUser.Command(model);
    var response = await _mediator.Send(command, cancellationToken);

    return Ok(response);
  }
}