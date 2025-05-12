using Microsoft.EntityFrameworkCore;
using JobTracker.Api.Models;

namespace JobTracker.Api.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
  public DbSet<JobApplication> Applications => Set<JobApplication>();

  protected override void OnModelCreating(ModelBuilder b)
  {
    b.Entity<JobApplication>()
     .Property(p => p.Status)
     .HasConversion<string>();
  }
}
