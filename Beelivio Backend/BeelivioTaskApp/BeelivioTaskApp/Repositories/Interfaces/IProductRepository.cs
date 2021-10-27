using BeelivioDomain.DTO;
using BeelivioDomain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeelivioTaskApp.Repositories.Interfaces
{
    public interface IProductRepository
    {
        Task<CommonResponseModel> InsertProduct(ProductDto p);
        Task<CommonResponseModel> UpdateProduct(ProductDto p);
        Task<CommonResponseModel> DeleteProduct(int pId);
        Task<List<ProductDto>> GetProducts();
        Task<ProductDto> GetProductById(int pId);
    }
}
