using BeelivioDomain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeelivioDomain.Interfaces.Service
{
    public interface IProducerService
    {
        Task InsertProduct(ProducerDto p);
        Task UpdateProduct(ProducerDto p);
        Task DeleteProduct(int pId);
        Task GetProductById(int pId);
        List<ProducerDto> GetProduct();
    }
}
