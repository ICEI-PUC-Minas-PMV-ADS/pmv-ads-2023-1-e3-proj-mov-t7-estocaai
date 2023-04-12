using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EstocaaiDbAdapter
{
    internal class EstocaaiContextDb : DbContext
    {
        public EstocaaiContextDb(DbContextOptions options) : base(options)
        {
        }
    }
}
