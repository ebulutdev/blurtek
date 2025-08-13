using Microsoft.EntityFrameworkCore;
using BlurApi.Models;

namespace BlurApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Enterprise> Enterprises { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<Enterprise>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Balance).HasPrecision(18, 2);
                entity.Property(e => e.CreatedAt).HasDefaultValueSql("GETUTCDATE()");
            });
        }
    }
}
