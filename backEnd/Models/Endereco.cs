using System;

namespace backEnd.Models
{
    public class Endereco
    {

        public Guid Id { get; set; }

        public string Rua { get; set; }

        public string Cidade { get; set; }

        public string Estado { get; set; }
    }
}
