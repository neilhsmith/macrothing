using AutoMapper;

namespace Macrothing.Api.Features.Users;

public class User : BaseEntity
{
  public required Guid Oid { get; set; } // azure ad b2c oid

  public required string EmailAddress { get; set; }
  public required string NormalizedEmailAddress { get; set; }
}

// --------

public class UserDto
{
  public int Id { get; set; }
  public DateTime CreatedAt { get; set; }
  public DateTime? ModifiedAt { get; set; }

  public required string EmailAddress { get; set; }
}

// --------

public class UserProfile : Profile
{
  public UserProfile()
  {
    CreateMap<User, UserDto>();
    CreateMap<UserDto, User>();
  }
}