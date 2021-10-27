using BeelivioTaskApp.Data;
using BeelivioDomain.DTO;

using BeelivioDomain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BeelivioTaskApp.Repositories.Interfaces;

namespace BeelivioTaskApp.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private ApplicationDbContext _context;
        public ProductRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<CommonResponseModel> InsertProduct(ProductDto product)
        {
            ProductModel p = new ProductModel();
            p.ProductId = product.ProductId;
            p.ProductName = product.ProductName;
            p.ProductPrice = product.ProductPrice;
            p.ProducerId = product.ProducerId;
             _context.Product.Add(p);
            await _context.SaveChangesAsync();
            return new CommonResponseModel
            {
                StatusCode = 200,
                ResponseMessage="Succesfully created product"
            };
        }
        public async Task<CommonResponseModel> UpdateProduct(ProductDto product)
        {
            var p = _context.Product.Where(x => x.ProductId == product.ProductId).SingleOrDefault();
            if (p != null)
            {
                p.ProductId = product.ProductId;
                p.ProductName = product.ProductName;
                p.ProductPrice = product.ProductPrice;
                p.ProducerId = product.ProducerId;
                await _context.SaveChangesAsync();
                return new CommonResponseModel
                {
                    StatusCode = 200,
                    ResponseMessage = "Succesfully updated"
                };
                //_context.Product.Update(p);

            }
            return new CommonResponseModel
            {
                StatusCode = 404,
                ResponseMessage = "Not Found"
            };
        }
        public async Task<CommonResponseModel> DeleteProduct(int pId)
        {
            var p = _context.Product.Where(x => x.ProductId == pId).SingleOrDefault();
            if (p != null)
            {
                _context.Product.Remove(p);
                _context.SaveChanges();
                return new CommonResponseModel
                {
                    StatusCode = 200,
                    ResponseMessage = "Succesfully deleted"
                };
            }
            return new CommonResponseModel
            {
                StatusCode = 404,
                ResponseMessage = "Not Found"
            };
        }
        public async Task<ProductDto> GetProductById(int pId)
        {
            ProductDto p = _context.Product.Where(x => x.ProductId == pId).Select(x => new ProductDto
            {
                ProductId = x.ProductId,
                ProductName = x.ProductName,
                ProductPrice = x.ProductPrice,
                ProducerId = x.ProducerId
            }).SingleOrDefault();
            return p;
        }
        public async Task<List<ProductDto>> GetProducts()
        {
            List<ProductDto> p = _context.Product.Select(x=> new ProductDto
            {
                ProductId = x.ProductId,
                ProductName = x.ProductName,
                ProductPrice = x.ProductPrice,
                ProducerId = x.ProducerId
            }).ToList();
            return p;
        }
    }
}
