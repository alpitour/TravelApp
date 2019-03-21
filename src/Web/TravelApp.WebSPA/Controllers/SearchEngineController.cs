using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Services.SearchEngine.Infrastructure.Database;

namespace TravelApp.WebSPA.Controllers
{
    [Route("api/[controller]/[action]")]
    public class SearchEngineController : Controller
    {
        private readonly SearchEngineDbContext _context;

        public SearchEngineController(SearchEngineDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [HttpGet]
        public IActionResult Search([FromQuery]string text)
        {
            var results = _context.Hotels
                .Where(x => 
                    x.Name.ToLower().Contains(text.ToLower()) ||
                    x.Country.ToLower().Contains(text.ToLower()) ||
                    x.Region.ToLower().Contains(text.ToLower()))
                .ToList();

            return Ok(results);
        }
    }
}
