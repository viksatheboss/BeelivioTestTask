using BeelivioDomain.DTO;
using BeelivioDomain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeelivioTaskApp.Repositories.Interfaces
{
    public interface IProducerRepository
    {
        Task<CommonResponseModel> InsertProducer(ProducerDto p);
        Task<CommonResponseModel> UpdateProducer(ProducerDto p);
        Task <CommonResponseModel> DeleteProducer(int pId);
        Task<List<ProducerDto>> GetProducers();
        Task<ProducerDto> GetProducerById(int pId);
    }
}
