﻿namespace Andreys.Data
{
    using Andreys.Models;
    using Microsoft.EntityFrameworkCore;

    public class AndreysDbContext : DbContext
    {
        public AndreysDbContext()
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-8VBNUMC\SQLEXPRESS;Database=Andreys-hyparh;Integrated Security=True;");

            base.OnConfiguring(optionsBuilder);
        }
    }
}
