using System.Reflection;
using Blueboard.Core.Auth;
using Blueboard.Core.Auth.Interfaces;
using Blueboard.Infrastructure.Persistence.Entities;
using Helpers.WebApi.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Blueboard.Infrastructure.Persistence.StartupActions;

public class SeedDatabaseAction : IStartupAction
{
    private readonly ILogger<SeedDatabaseAction> _logger;
    private readonly IServiceProvider _serviceProvider;

    public SeedDatabaseAction(IServiceProvider serviceProvider, ILogger<SeedDatabaseAction> logger)
    {
        _serviceProvider = serviceProvider;
        _logger = logger;
    }

    public async Task Execute()
    {
        using var scope = _serviceProvider.CreateScope();
        await using var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
        var environment = scope.ServiceProvider.GetRequiredService<IHostEnvironment>();

        var defaultGroup = await context.UserGroups.FindAsync(AuthConstants.DefaultUserGroupID);

        if (defaultGroup == null)
        {
            var permissionNames = Assembly.GetExecutingAssembly()
                .GetTypes()
                .Where(x => typeof(IPermission).IsAssignableFrom(x) && x is { IsInterface: false, IsAbstract: false })
                .Select(x => ((IPermission)Activator.CreateInstance(x)!).Name)
                .ToArray(); // We can't use PermissionUtils just yet as it is also initialized in a startup action

            var group = new UserGroup
            {
                Id = AuthConstants.DefaultUserGroupID,
                Name = "Default",
                Permissions = environment.IsDevelopment() ? permissionNames : new string[] { }
            };

            await context.UserGroups.AddAsync(group);
            await context.SaveChangesAsync();

            await context.Database.ExecuteSqlRawAsync(
                @$"select setval(pg_get_serial_sequence('""{nameof(ApplicationDbContext.UserGroups)}""', '{nameof(UserGroup.Id)}'), (select max(""{nameof(UserGroup.Id)}"") from ""{nameof(ApplicationDbContext.UserGroups)}""))");

            _logger.LogInformation("Created the default user group");
        }
    }
}