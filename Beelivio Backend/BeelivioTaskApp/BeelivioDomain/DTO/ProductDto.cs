using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BeelivioDomain.DTO
{
    public class ProductDto
    {
        public int ProductId { get; set; }
        
        [Required]
        [MaxLength(20)]
        public string ProductName { get; set; }
        public int ProducerId { get; set; }
        [Required]
        public int ProductPrice { get; set; }
    }
}
