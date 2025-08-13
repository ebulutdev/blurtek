namespace BlurApi.Models
{
    public class CreateEnterpriseDto
    {
        public string Title { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public decimal Balance { get; set; }
        public string Address { get; set; } = string.Empty;
        public long TaxNumber { get; set; }
        public string TaxProvince { get; set; } = string.Empty;
        public string TaxDistrict { get; set; } = string.Empty;
    }

    public class UpdateEnterpriseDto
    {
        public string Title { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public decimal Balance { get; set; }
        public string Address { get; set; } = string.Empty;
        public long TaxNumber { get; set; }
        public string TaxProvince { get; set; } = string.Empty;
        public string TaxDistrict { get; set; } = string.Empty;
        public bool Disabled { get; set; }
    }

    public class EnterpriseResponseDto
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public decimal Balance { get; set; }
        public bool Verified { get; set; }
        public string Address { get; set; } = string.Empty;
        public long TaxNumber { get; set; }
        public string TaxProvince { get; set; } = string.Empty;
        public string TaxDistrict { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public bool Disabled { get; set; }
    }
}
