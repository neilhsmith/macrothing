using QueryKit.Configuration;

namespace Macrothing.Api.Application;

public class AppQueryKitConfiguration : QueryKitConfiguration
{
  public AppQueryKitConfiguration(Action<QueryKitSettings>? configureSettings = null)
    : base(settings =>
    {
      configureSettings?.Invoke(settings);
    })
  { }
}
