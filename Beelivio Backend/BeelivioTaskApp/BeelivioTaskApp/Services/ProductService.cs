using BeelivioTaskApp.Repositories;
using BeelivioDomain.DTO;
using BeelivioDomain.Interfaces.Service;
using BeelivioDomain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BeelivioTaskApp.Data;

namespace BeelivioTaskApp.Services
{
    public class ProductService 
    {
        private ProductRepository _repository;
        private ApplicationDbContext _context;
        public ProductService(ApplicationDbContext context)
        {
            _context = context;
        }
        //public async Task<ActionResult<ProductModel>> InsertProduct(ProductModel product)
        //{
        //    _context.Product.Add(product);
        //    await _context.SaveChangesAsync();
        //    return product;
        //}
        //public async Task UpdateProduct(ProductModel product)
        //{
        //    _repository.UpdateProduct(product);
        //}
        public async Task GetProductById(int pId)
        {
            _repository.GetProductById(pId);
        }
        public async Task DeleteProduct(int pId)
        {
            _repository.DeleteProduct(pId);
        }
        public async Task<List<ProductDto>> GetProduct()
        {
            var p = await _repository.GetProducts();
            return p;
        }
    }
}
