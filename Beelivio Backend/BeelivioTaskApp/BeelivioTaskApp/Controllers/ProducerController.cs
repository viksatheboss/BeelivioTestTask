using BeelivioDomain.DTO;

using BeelivioDomain.Models;
using BeelivioTaskApp.Data;
using BeelivioTaskApp.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeelivioTaskApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class ProducerController : ControllerBase
    {
        private ApplicationDbContext _context;
        private IProducerRepository _repo;
        public ProducerController( ApplicationDbContext context, IProducerRepository repo)
        {
            _context = context;
            _repo = repo;
        }
        [HttpPost]
        [Route("InsertProducer")]
        public async Task<CommonResponseModel> InsertProducer(ProducerDto producer)
        {
            
            return await _repo.InsertProducer(producer);
        }
        [HttpPost]
        [Route("UpdateProducer")]
        public async Task<CommonResponseModel> UpdateProducer(ProducerDto producer)
        {
            return await _repo.UpdateProducer(producer);
        }
        [HttpGet]
        [Route("GetById/{id}")]
        public async Task<ProducerDto> GetById(int id)
        {
            return await _repo.GetProducerById(id);
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<List<ProducerDto>> GetAll()
        {
            return await _repo.GetProducers();
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public async Task<CommonResponseModel> Delete(int id)
        {
             return await _repo.DeleteProducer(id);
        }
    }
}
