using BeelivioDomain.DTO;
using BeelivioDomain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BeelivioDomain.DTO;

namespace BeelivioDomain.Interfaces.Repository
{
    public interface IProducerRepository
    {
        Task<ProducerDto> InsertProducer(ProducerDto p);
        Task<ProducerDto> UpdateProducer(ProducerDto p);
        Task DeleteProducer(int pId);
        Task<List<ProducerDto>> GetProducers();
        Task<ProducerDto> GetProducerById(int pId);
    }
}
