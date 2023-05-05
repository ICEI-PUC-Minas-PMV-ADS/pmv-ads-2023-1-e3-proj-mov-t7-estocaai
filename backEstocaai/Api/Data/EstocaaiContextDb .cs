using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class EstocaaiContextDb : DbContext
    {
        public EstocaaiContextDb(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Endereco> Enderecos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
    }
}
