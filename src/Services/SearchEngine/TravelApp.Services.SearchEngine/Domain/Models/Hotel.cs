using System;
using System.Collections.Generic;
using System.Text;

namespace TravelApp.Services.SearchEngine.Domain.Models
{
    public class Hotel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string Country { get; set; }
        public string Region { get; set; }
    }
}
