
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;

namespace Macrothing.Api.Features.Users;

[Authorize]
[ApiController]
[Route("/api/tests")]
public class TestsController : ControllerBase
{
  private readonly ILogger<UsersController> _logger;

  public TestsController(ILogger<UsersController> logger, IMediator mediator)
  {
    _logger = logger;
  }

  [HttpGet]
  [RequiredScope(RequiredScopesConfigurationKey = "Scopes:Read")]
  public string HelloWorld()
  {
    return "hello world";
  }
}