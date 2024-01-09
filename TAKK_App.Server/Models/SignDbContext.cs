using Microsoft.EntityFrameworkCore;

namespace TAKK_App.Server.Models
{
    public class SignDbContext : DbContext
    {
        public SignDbContext(DbContextOptions<SignDbContext> options) 
            : base(options)
        {
        }
    }
}
