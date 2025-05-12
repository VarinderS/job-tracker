using JobTracker.Api.Data;
using JobTracker.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace JobTracker.Api.Repositories;

public class JobApplicationRepository(AppDbContext db) : IJobApplicationRepository
{
  public async Task<IEnumerable<JobApplication>> GetAllAsync() =>
      await db.Applications.AsNoTracking().OrderByDescending(a => a.DateAppliedUtc).ToListAsync();

  public Task<JobApplication?> GetAsync(int id) => db.Applications.FindAsync(id).AsTask();
  public async Task<JobApplication> AddAsync(JobApplication a)
  {
    db.Applications.Add(a);
    await db.SaveChangesAsync();
    return a;
  }
  public async Task UpdateAsync(JobApplication a)
  {
    db.Applications.Update(a);
    await db.SaveChangesAsync();
  }
}
