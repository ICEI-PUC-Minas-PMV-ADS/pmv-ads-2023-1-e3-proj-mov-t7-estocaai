﻿using System;

namespace Api.Models
{
    public class Usuario
    {
        public Guid Id { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public string Senha { get; set; }

        public string Cpf { get; set; }
    }
}
