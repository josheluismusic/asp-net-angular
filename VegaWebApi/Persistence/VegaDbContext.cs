using Microsoft.EntityFrameworkCore;
using VegaWebApi.Models;

namespace VegaWebApi.Persistence
{
    public class VegaDbContext : DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> options) : base(options)
        {
            
        }

        public DbSet<Make> Makes { get; set;}
    }
}