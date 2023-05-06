using System.Reflection;
using FluentValidation;
using Hangfire;
using Hangfire.PostgreSql;
using MediatR;
using Microsoft.Extensions.DependencyInjection.Extensions;
using WebApi.Common.Behaviours;

namespace WebApi.Common;

public static class AddCommonExtension
{
    public static void AddCommon(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddHttpContextAccessor();
        services.AddMemoryCache();

        // Fluent Validation
        services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
        services
            .TryAddTransient<IValidatorFactory,
                ServiceProviderValidatorFactory>(); // Required for Swagger docs based on fluent validation

        // MediatR
        services.AddMediatR(Assembly.GetExecutingAssembly());
        services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehaviour<,>));
        services.AddTransient(typeof(IPipelineBehavior<,>), typeof(PerformanceBehaviour<,>));

        // Scheduler
        services.AddHangfire(c => c.SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
            .UseSimpleAssemblyNameTypeSerializer()
            .UseRecommendedSerializerSettings()
            .UsePostgreSqlStorage(configuration.GetConnectionString("HangfireConnection")));
        services.AddHangfireServer();
    }
}