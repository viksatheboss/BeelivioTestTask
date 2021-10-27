using BeelivioDomain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeelivioTaskApp.Repositories.Interfaces
{
     public interface ITokenService
    {
        string CreateToken(UserModel user);
    }
}
