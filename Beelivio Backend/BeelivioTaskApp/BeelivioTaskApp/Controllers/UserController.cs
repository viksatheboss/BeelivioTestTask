using BeelivioDomain.DTO;
using BeelivioDomain.Models;
using BeelivioTaskApp.Data;
using BeelivioTaskApp.Repositories.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace BeelivioTaskApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private ApplicationDbContext _context;
        private readonly ITokenService _tokenService;
        public UserController(ApplicationDbContext context, ITokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }
        [AllowAnonymous]
        [HttpGet]
       public async Task<ActionResult<IEnumerable<UserModel>>> GetUSers()
        {
            return await _context.User.ToListAsync();
        }
        [Authorize]
        [HttpGet]
        [Route("getUser/{id}")]
        public async Task<ActionResult<UserModel>>GetUser(int id)
        {
            return await _context.User.FindAsync(id);
        }
        [HttpPost("registerUser")]
        public async Task<ActionResult<UserDto>> RegisterUser(RegisterDto register)
        {
            if (await UserExist(register.UserName)) return BadRequest("Already have user with same name");
            using var hmac = new HMACSHA512();
            var user = new UserModel
            {
                Name = register.UserName,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(register.Password)),
                PasswordSalt = hmac.Key
            };
            _context.User.Add(user);
            await _context.SaveChangesAsync();
            return new UserDto { 
            UserName = user.Name,
            Token = _tokenService.CreateToken(user)};
        }
        private async Task<bool> UserExist(string userName)
        {
            return await _context.User.AnyAsync(x => x.Name == userName.ToLower());
        }
        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<UserDto>> Login (LoginDto login)
        {
            var user = await _context.User.SingleOrDefaultAsync(x => x.Name == login.UserName);
            if (user == null) return Unauthorized("Invalid UserName");
            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(login.Password));
             for(var i=0; i<computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid password");
            }
            return new UserDto { 
            UserName = user.Name,
            Token = _tokenService.CreateToken(user)};
        }
    }
}
