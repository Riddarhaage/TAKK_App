
using Microsoft.EntityFrameworkCore;
using TAKK_App.Server.Models;

namespace TAKK_App.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            //TODO: Research if this is the best practice for adding a connection string
            builder.Services.AddDbContext<SignDbContext>(options =>
                           options.UseSqlServer("Server=LAPTOP-H6IIRGIU;Database=SignDB;Trusted_Connection=True;TrustServerCertificate=True;"));

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            //TODO: Research if this is the best way to enable CORS
            app.UseCors(policy =>
            {
                policy.AllowAnyHeader();
                policy.AllowAnyMethod();
                policy.AllowAnyOrigin();
            });

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();


            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();

        }
    }
}
