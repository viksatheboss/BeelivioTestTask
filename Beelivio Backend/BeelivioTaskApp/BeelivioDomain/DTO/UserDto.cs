using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeelivioDomain.DTO
{
    public class UserDto
    {
        public int ResponseCode { get; set; }
        public string UserName { get; set; }
        public string Token { get; set; }
    }
}
