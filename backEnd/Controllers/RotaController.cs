using backEnd.Data;
using backEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RotaController : ControllerBase
    {

        private readonly ILogger<RotaController> _logger;
        private readonly EstocaaiContextDb _context;

        public RotaController(EstocaaiContextDb context,
                    ILogger<RotaController> logger)
        {
            _context = context;
            _logger = logger;
        }


        [HttpPost("calcular-rota")]
        public IActionResult CalcularRota([FromBody] CalcularRotaRequest request)
        {
            // Aqui você pode implementar a lógica para calcular a rota entre os dois endereços
            // e retornar o resultado em um objeto adequado

            return Ok("Rota calculada com sucesso!");
        }
    }
}
