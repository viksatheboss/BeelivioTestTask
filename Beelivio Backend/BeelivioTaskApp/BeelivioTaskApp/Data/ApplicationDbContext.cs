using BeelivioDomain.Models;
using Microsoft.EntityFrameworkCore;

namespace BeelivioTaskApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<ProductModel> Product { get; set; }
        public DbSet<ProducerModel> Producer { get; set; }
        public DbSet<UserModel> User { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            
        }
    }
}
