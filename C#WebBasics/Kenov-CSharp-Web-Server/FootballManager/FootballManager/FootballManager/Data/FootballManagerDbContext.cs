namespace FootballManager.Data
{
    using FootballManager.Data.Models;
    using Microsoft.EntityFrameworkCore;
    public class FootballManagerDbContext : DbContext
    {
        public DbSet<Player> Players { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<UserPlayer> UserPlayers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //hyparh is my username in SoftUni

                optionsBuilder.UseSqlServer
                    (@"Server=DESKTOP-8VBNUMC\SQLEXPRESS;Database=FootballManager-hyparh;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserPlayer>()
                .HasKey(k => new { k.UserId, k.PlayerId });
        }
    }
}
