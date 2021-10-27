using BeelivioDomain.DTO;
using BeelivioDomain.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeelivioDomain.Interfaces.Service
{
    public interface IProductService
    {
        Task<ActionResult<ProductModel>> InsertProduct(ProductModel p);
        Task UpdateProduct(ProductModel p);
        Task DeleteProduct(int pId);
        Task GetProductById(int pId);
        Task<List<ProductDto>> GetProduct();

    }
}
