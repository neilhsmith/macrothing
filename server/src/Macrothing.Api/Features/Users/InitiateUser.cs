using AutoMapper;
using FluentValidation;
using Macrothing.Api.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Macrothing.Api.Features.Users;

public static class InitiateUser
{
  public sealed record Command(InitiateUserRequest Model) : IRequest<UserDto>;

  public class Handler : IRequestHandler<Command, UserDto>
  {
    private readonly AppDbContext _dbContext;
    private readonly IMapper _mapper;

    public Handler(AppDbContext dbContext, IMapper mapper)
    {
      _dbContext = dbContext;
      _mapper = mapper;
    }

    public async Task<UserDto> Handle(Command request, CancellationToken cancellationToken)
    {
      var validator = new InitiateUserRequestValidator();
      await validator.ValidateAndThrowAsync(request.Model, cancellationToken);

      // TODO:
      // - check w/ azure that this idp id actually exists

      var normalizedRequestEmailAddress = NormalizeEmail(request.Model.EmailAddress);
      var user = await _dbContext.Users
        .FirstOrDefaultAsync(u =>
            u.Oid == request.Model.Oid &&
            u.NormalizedEmailAddress == normalizedRequestEmailAddress,
          cancellationToken
        );

      if (user is null)
      {
        user = _mapper.Map<InitiateUserRequest, User>(request.Model);
        user.NormalizedEmailAddress = NormalizeEmail(request.Model.EmailAddress);

        await _dbContext.AddAsync(user, cancellationToken);
        await _dbContext.SaveChangesAsync(cancellationToken);
      }

      return _mapper.Map<User, UserDto>(user);
    }
  }

  private static string NormalizeEmail(string Email)
  {
    return Email.Trim().ToLower();
  }
}

public class InitiateUserRequest
{
  public required Guid Oid { get; set; }
  public required string EmailAddress { get; set; }
}

public class InitiateUserRequestValidator : AbstractValidator<InitiateUserRequest>
{
  public InitiateUserRequestValidator()
  {
    RuleFor(x => x.Oid)
      .NotEmpty();

    RuleFor(x => x.EmailAddress)
      .NotEmpty()
      .EmailAddress();
  }
}

public class InitiateUserRequestProfile : Profile
{
  public InitiateUserRequestProfile()
  {
    CreateMap<InitiateUserRequest, User>();
  }
}