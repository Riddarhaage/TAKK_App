using Microsoft.EntityFrameworkCore;

namespace TAKK_App.Server.Models
{
    public class SignDbContext : DbContext
    {
        public DbSet<Sign> Signs { get; set; }

        public SignDbContext(DbContextOptions<SignDbContext> options) 
            : base(options)
        {
        }
    }
}
