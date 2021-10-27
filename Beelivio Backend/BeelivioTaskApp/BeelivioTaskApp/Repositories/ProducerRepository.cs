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
    public class ProducerRepository : IProducerRepository
    {
        private ApplicationDbContext _context;
        public ProducerRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<CommonResponseModel> InsertProducer(ProducerDto producer)
        {
            ProducerModel p = new ProducerModel();
            p.Id = producer.Id;
            p.Name = producer.Name;
            
            _context.Producer.Add(p);
            await _context.SaveChangesAsync();
            return new CommonResponseModel { StatusCode=200, ResponseMessage="Succesfullt Created" };
        }
        public async Task<CommonResponseModel> UpdateProducer(ProducerDto producer)
        {
            var p = _context.Producer.Where(x => x.Id == producer.Id).SingleOrDefault();
            if (p != null)
            {
                p.Id = producer.Id;
                p.Name = producer.Name;
               await _context.SaveChangesAsync();
                return new CommonResponseModel
                {
                    StatusCode = 200,
                    ResponseMessage = "Succesfullt updated"
                };
            }
            return new CommonResponseModel
            {
                StatusCode = 404,
                ResponseMessage = "Not Found"
            }; ;
        }
        public async Task<ProducerDto> GetProducerById(int pId)
        {
            ProducerDto p = _context.Producer.Where(x => x.Id == pId).Select(x => new ProducerDto
            {
                Id = x.Id,
                Name = x.Name
            }).SingleOrDefault();
            return p;
        }
        public async Task<CommonResponseModel> DeleteProducer(int pId)
        {
            var p = _context.Producer.Where(x => x.Id == pId).SingleOrDefault();
            if(p!= null)
            {
                _context.Producer.Remove(p);
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
        public async Task<List<ProducerDto>> GetProducers()
        {
            List<ProducerDto> p = _context.Producer.Select(x => new ProducerDto
            {
                Id = x.Id,
                Name = x.Name
            }).ToList();
            return p;
        }
    }
}
