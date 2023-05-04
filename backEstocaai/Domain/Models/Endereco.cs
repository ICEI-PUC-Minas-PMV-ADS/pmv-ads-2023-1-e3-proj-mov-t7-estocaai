using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Models
{
    public class Endereco
    {
        public Guid Id { get; set; }

        public string Rua { get; set; }

        public int Cidade { get; set; }

        public string Estado { get; set; }
    }
}
