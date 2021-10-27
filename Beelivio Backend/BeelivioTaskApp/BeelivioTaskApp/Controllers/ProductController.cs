
using BeelivioDomain.DTO;
using BeelivioDomain.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeelivioTaskApp.Data;
using BeelivioTaskApp.Services;
using BeelivioDomain.Interfaces.Service;
using BeelivioTaskApp.Repositories;
using Microsoft.EntityFrameworkCore;
using BeelivioTaskApp.Repositories.Interfaces;

namespace BeelivioTaskApp.Controllers
{
    
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        
        private readonly ApplicationDbContext _context;
        private IProductRepository _repo;
        
        public ProductController( ApplicationDbContext context, IProductRepository repo)
        {
            
            _context = context;
            _repo = repo;
        }
        [HttpPost]
        [Route("insertProduct")]
        public async Task<ActionResult<CommonResponseModel>> InsertProduct(ProductDto product)
        {
            
            
            return await _repo.InsertProduct(product);
        }

        [HttpPost]
        [Route("updateProduct")]
        public async Task<ActionResult<CommonResponseModel>> UpdateProduct(ProductDto product)
        {
            
            return await _repo.UpdateProduct(product);
        }
        [HttpGet]
        [Route("getById/{id}")]
        public async Task<ActionResult<ProductDto>>GetById(int id)
        {
            return await _repo.GetProductById(id);
        }
        [HttpDelete]
        [Route("delete/{id}")]
        public async Task<ActionResult<CommonResponseModel>> Delete(int id)
        {
            
            return await _repo.DeleteProduct(id);
        }

        [HttpGet]
        [Route("getAll")]
        public async Task<List<ProductDto>> GetAll()
        {
            return await _repo.GetProducts();
        }
    }
}
