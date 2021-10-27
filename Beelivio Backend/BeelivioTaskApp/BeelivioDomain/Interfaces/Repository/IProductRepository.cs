using BeelivioDomain.DTO;
using BeelivioDomain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeelivioDomain.Interfaces.Repository
{
    public interface IProductRepository
    {
        Task InsertProduct(ProductModel p);
        Task UpdateProduct(ProductModel p);
        Task DeleteProduct(int pId);
        Task<List<ProductDto>> GetProducts();
        Task<ProductDto> GetProductById(int pId);
    }
}
