namespace MeuProjeto.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        
        // Propriedade de navegação para relacionamento com outra entidade (exemplo: Categoria)
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }

    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        // Propriedade de navegação para relacionamento com outra entidade (exemplo: Produto)
        public ICollection<Product> Products { get; set; }
    }
}
