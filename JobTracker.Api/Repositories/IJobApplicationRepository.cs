using JobTracker.Api.Models;

namespace JobTracker.Api.Repositories;

public interface IJobApplicationRepository
{
  Task<IEnumerable<JobApplication>> GetAllAsync();
  Task<JobApplication?> GetAsync(int id);
  Task<JobApplication> AddAsync(JobApplication app);
  Task UpdateAsync(JobApplication app);
}
