using System;

namespace Api.Models
{
    public class Endereco
    {

        public Guid Id { get; set; }

        public string Rua { get; set; }

        public int Cidade { get; set; }

        public string Estado { get; set; }
    }
}
