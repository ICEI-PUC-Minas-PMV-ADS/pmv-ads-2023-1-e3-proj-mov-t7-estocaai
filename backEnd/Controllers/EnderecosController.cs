using backEnd.Data;
using backEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EnderecosController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly EstocaaiContextDb _context;

        public EnderecosController(EstocaaiContextDb context,
                    ILogger<WeatherForecastController> logger)
        {
            _context = context;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetEnderecos()
        {
            var enderecos = await _context.Enderecos.ToListAsync();
            return Ok(enderecos);
        }

    }
}
