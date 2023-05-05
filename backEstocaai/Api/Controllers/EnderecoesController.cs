using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class EnderecoesController : ControllerBase
    {
        private readonly EstocaaiContextDb _context;

        public EnderecoesController(EstocaaiContextDb context)
        {
            _context = context;
        }

        // GET: Enderecoes
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return Ok("Ola");
            //return Ok(await _context.Enderecos.ToListAsync());
        }
    }
}
