using WebApi.Core.Auth.Services;

namespace WebApi.Core.Auth.Exceptions;

/// <summary>
///     The exception thrown when a user is not found in <see cref="UserAccessor" /> but is trying to be accessed.
/// </summary>
public class UserNotFoundException : Exception
{
}