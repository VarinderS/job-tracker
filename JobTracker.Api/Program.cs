using JobTracker.Api.Data;
using JobTracker.Api.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(o => o.UseInMemoryDatabase("JobTracker"));
builder.Services.AddScoped<IJobApplicationRepository, JobApplicationRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendDev", p => p
        .WithOrigins("http://localhost:5173")   // React-Vite dev server
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials());
});

builder.Services.AddControllers();
// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("FrontendDev");
app.MapControllers();
app.UseHttpsRedirection();

app.Run();