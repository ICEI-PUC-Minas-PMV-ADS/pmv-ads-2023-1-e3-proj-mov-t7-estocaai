using backEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace backEnd.Data
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
