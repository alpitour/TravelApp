using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Services.SearchEngine.Domain.Models;

namespace TravelApp.Services.SearchEngine.Infrastructure.Database
{
    public class SearchEngineDbContext : DbContext
    {
        public SearchEngineDbContext(DbContextOptions<SearchEngineDbContext> options)
            : base(options)
        { }

        public DbSet<Hotel> Hotels { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {

        }

        public object Where()
        {
            throw new NotImplementedException();
        }
    }
}
