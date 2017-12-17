using System.ComponentModel.DataAnnotations;

namespace VegaWebApi.Controllers.Resources
{
    public class ContactResource 
    {
        [Required]
        public string Name { get; set; }
        [StringLength(255)]
        public string Email { get; set; }
        [Required]
        [StringLength(255)]
        public string Phone { get; set; }
    }
}