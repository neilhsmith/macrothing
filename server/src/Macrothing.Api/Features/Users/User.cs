namespace Macrothing.Api.Features.Users;

public class User : BaseEntity
{
  public required int IDPId { get; set; }
  public required string EmailAddress { get; set; }
}