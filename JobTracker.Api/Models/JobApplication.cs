namespace JobTracker.Api.Models;

public enum ApplicationStatus { Applied, Interview, Offer, Rejected }

public class JobApplication
{
  public int Id { get; set; }
  public string Company { get; set; } = null!;
  public string Position { get; set; } = null!;
  public ApplicationStatus Status { get; set; } = ApplicationStatus.Applied;
  public DateTime DateAppliedUtc { get; set; } = DateTime.UtcNow;
}
