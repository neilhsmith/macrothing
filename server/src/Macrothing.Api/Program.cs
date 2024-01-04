using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;
using Hellang.Middleware.ProblemDetails;
using Macrothing.Api.Application;
using Macrothing.Api.Configurations;
using Macrothing.Api.Data;
using Macrothing.Api.Extensions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionStringOptions().MacrothingDbDev;
builder.Services.AddDbContext<AppDbContext>(options =>
  options.UseSqlServer(connectionString,
    builder => builder.MigrationsAssembly(typeof(AppDbContext).Assembly.FullName)));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAdB2C"));

builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(policy =>
  {
    policy
      .AllowAnyOrigin()
      .AllowAnyHeader().AllowAnyMethod()
      .WithExposedHeaders("X-Pagination");
  });
});

builder.Services
  .AddAutoMapper(Assembly.GetExecutingAssembly());

builder.Services
  .ConfigureProblemDetails();

builder.Services
  .AddControllers()
  .AddJsonOptions(options =>
  {
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
  });

builder.Services.AddMediatR(config => config
  .RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));

builder.Services.AddSwaggerGen(options =>
{
  var swaggerAuthClientOptions = builder.Configuration.GetSwaggerAuthClientOptions();

  options.SupportNonNullableReferenceTypes();
  options.SchemaFilter<RequiredNotNullableSchemaFilter>();

  options.SwaggerDoc("v1", new OpenApiInfo
  {
    Version = "v1",
    Title = "Macrothing API"
  });

  options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
  {
    Type = SecuritySchemeType.OAuth2,
    Flows = new OpenApiOAuthFlows
    {
      AuthorizationCode = new OpenApiOAuthFlow
      {
        AuthorizationUrl = new Uri(swaggerAuthClientOptions.AuthorizationUrl),
        TokenUrl = new Uri(swaggerAuthClientOptions.TokenUrl),
        Scopes = new Dictionary<string, string>
        {
            {"https://macrothing.onmicrosoft.com/macrothing-api/Api.Read", "Macrothing API Read Access"},
            {"https://macrothing.onmicrosoft.com/macrothing-api/Api.Write", "Macrothing API Write Access"},
        }
      }
    }
  });

  options.AddSecurityRequirement(new OpenApiSecurityRequirement
  {
    {
      new OpenApiSecurityScheme
      {
        Reference = new OpenApiReference
        {
          Type = ReferenceType.SecurityScheme,
          Id = "oauth2"
        },
        Scheme = "oauth2",
        Name = "oauth2",
        In = ParameterLocation.Header
      },
      new List<string>()
    }
  });

  var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
  options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI(options =>
  {
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;

    var swaggerAuthClientOptions = builder.Configuration.GetSwaggerAuthClientOptions();
    options.OAuthClientId(swaggerAuthClientOptions.ClientId);
    options.OAuthClientSecret(swaggerAuthClientOptions.ClientSecret);
    options.OAuthUsePkce();
  });
}

app.UseProblemDetails();
app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.UseCors();

app.MapControllers();

app.Run();
