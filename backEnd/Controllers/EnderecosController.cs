using backEnd.Data;
using backEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backEnd.Services;

namespace backEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EnderecosController : ControllerBase
    {
        private readonly ILogger<EnderecosController> _logger;
        private readonly EstocaaiContextDb _context;

        public EnderecosController(EstocaaiContextDb context,
                    ILogger<EnderecosController> logger)
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEndereco(Guid id)
        {
            var endereco = await _context.Enderecos.FindAsync(id);
            if (endereco == null)
            {
                return NotFound();
            }
            return Ok(endereco);
        }

        [HttpPost]
        public async Task<IActionResult> AddEndereco(string cep, string numero)
        {
            var correiosApi = new CorreiosApi();

            var rastrearEndereco = await correiosApi.RastrearObjeto(cep);

            var endereco = new Endereco
            {
                Id = Guid.NewGuid(),
                Cidade = rastrearEndereco.localidade,
                Rua = rastrearEndereco.logradouro + numero,
                Estado = rastrearEndereco.uf
            };

            _context.Enderecos.Add(endereco);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEndereco), new { id = endereco.Id }, endereco);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEndereco(Guid id, Endereco endereco)
        {
            if (id != endereco.Id)
            {
                return BadRequest();
            }
            _context.Entry(endereco).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EnderecoExists(id))
                {
                    return NotFound();
                }
                throw;
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEndereco(Guid id)
        {
            var endereco = await _context.Enderecos.FindAsync(id);
            if (endereco == null)
            {
                return NotFound();
            }
            _context.Enderecos.Remove(endereco);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool EnderecoExists(Guid id)
        {
            return _context.Enderecos.Any(e => e.Id == id);
        }
    }
}
