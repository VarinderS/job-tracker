using JobTracker.Api.Models;
using JobTracker.Api.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace JobTracker.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class JobApplicationsController(IJobApplicationRepository repo) : ControllerBase
{
  [HttpGet] public async Task<IActionResult> Get() => Ok(await repo.GetAllAsync());

  [HttpGet("{id:int}")]
  public async Task<IActionResult> Get(int id)
      => await repo.GetAsync(id) is { } app ? Ok(app) : NotFound();

  [HttpPost]
  public async Task<IActionResult> Post(JobApplication app)
  {
    if (!ModelState.IsValid) return BadRequest(ModelState);
    var created = await repo.AddAsync(app);
    return CreatedAtAction(nameof(Get), new { id = created.Id }, created);
  }

  [HttpPut("{id:int}")]
  public async Task<IActionResult> Put(int id, JobApplication app)
  {
    if (id != app.Id) return BadRequest("ID mismatch");
    await repo.UpdateAsync(app);
    return NoContent();
  }
}
