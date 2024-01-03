using Macrothing.Api.Features;
using Macrothing.Api.Features.Users;
using Microsoft.EntityFrameworkCore;

namespace Macrothing.Api.Data;

public sealed class AppDbContext : DbContext
{
  public DbSet<User> Users { get; set; }

  public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

  protected override void OnModelCreating(ModelBuilder builder)
  {
    builder.Entity<User>()
      .HasIndex(u => u.Oid)
      .IsUnique();
    builder.Entity<User>()
      .HasIndex(u => u.EmailAddress)
      .IsUnique();
  }

  public override int SaveChanges()
  {
    UpdateAuditFields();
    return base.SaveChanges();
  }

  public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new())
  {
    UpdateAuditFields();
    return await base.SaveChangesAsync(cancellationToken);
  }

  private void UpdateAuditFields()
  {
    var now = DateTime.UtcNow;

    foreach (var entry in ChangeTracker.Entries<BaseEntity>())
    {
      switch (entry.State)
      {
        case EntityState.Added:
          entry.Entity.UpdateCreationProperties(now);
          break;
        case EntityState.Modified:
          entry.Entity.UpdateModifiedProperties(now);
          break;
      }
    }
  }
}
