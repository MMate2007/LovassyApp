namespace WebApi.Contexts.Import.Models;

public class ViewImportKeyResponse
{
    public int Id { get; set; }

    public string Name { get; set; }
    public bool Enabled { get; set; }

    public string Key { get; set; }
}