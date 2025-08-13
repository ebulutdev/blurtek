using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlurApi.Models
{
    public class Enterprise
    {
        [Key]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        
        [Required]
        [StringLength(200)]
        public string Title { get; set; } = string.Empty;
        
        [Required]
        [RegularExpression(@"^90\d{10}$", ErrorMessage = "Phone number must start with 90 and be 12 digits")]
        public string Phone { get; set; } = string.Empty;
        
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        
        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Balance { get; set; }
        
        public bool Verified { get; set; } = true; // Automatically verified
        
        [Required]
        public string Address { get; set; } = string.Empty;
        
        [Required]
        [RegularExpression(@"^\d{10}$", ErrorMessage = "Tax number must be exactly 10 digits")]
        public long TaxNumber { get; set; }
        
        [Required]
        public string TaxProvince { get; set; } = string.Empty;
        
        [Required]
        public string TaxDistrict { get; set; } = string.Empty;
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public bool Disabled { get; set; } = false;
    }
}
