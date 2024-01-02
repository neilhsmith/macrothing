namespace Macrothing.Api.Configurations;

public class ConnectionStringOptions
{
  public const string SectionName = "ConnectionStrings";
  public const string MacrothingApiDevDbKey = nameof(MacrothingDbDev);

  public string MacrothingDbDev { get; set; } = string.Empty;
}

public static class ConnectionStringOptionsExtensions
{
  public static ConnectionStringOptions GetConnectionStringOptions(this IConfiguration configuration)
    => configuration.GetSection(ConnectionStringOptions.SectionName).Get<ConnectionStringOptions>()
       ?? new ConnectionStringOptions();
}
