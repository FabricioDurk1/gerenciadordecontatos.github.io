using Microsoft.EntityFrameworkCore;

namespace YourNamespace.Data
{
    public class MyDbContext : DbContext
    {
        public DbSet<Contato> Contatos { get; set; } // DbSet para a entidade Contato

        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configurações adicionais do modelo aqui
        }
    }
}



