using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BlurApi.Data;
using BlurApi.Models;

namespace BlurApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EnterpriseController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EnterpriseController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/enterprise
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EnterpriseResponseDto>>> GetEnterprises()
        {
            var enterprises = await _context.Enterprises
                .OrderByDescending(e => e.CreatedAt)
                .Select(e => new EnterpriseResponseDto
                {
                    Id = e.Id,
                    Title = e.Title,
                    Phone = e.Phone,
                    Email = e.Email,
                    Balance = e.Balance,
                    Verified = e.Verified,
                    Address = e.Address,
                    TaxNumber = e.TaxNumber,
                    TaxProvince = e.TaxProvince,
                    TaxDistrict = e.TaxDistrict,
                    CreatedAt = e.CreatedAt,
                    Disabled = e.Disabled
                })
                .ToListAsync();

            return Ok(new { data = enterprises });
        }

        // GET: api/enterprise/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<EnterpriseResponseDto>> GetEnterprise(string id)
        {
            var enterprise = await _context.Enterprises.FindAsync(id);

            if (enterprise == null)
            {
                return NotFound(new { detail = "Enterprise not found" });
            }

            var response = new EnterpriseResponseDto
            {
                Id = enterprise.Id,
                Title = enterprise.Title,
                Phone = enterprise.Phone,
                Email = enterprise.Email,
                Balance = enterprise.Balance,
                Verified = enterprise.Verified,
                Address = enterprise.Address,
                TaxNumber = enterprise.TaxNumber,
                TaxProvince = enterprise.TaxProvince,
                TaxDistrict = enterprise.TaxDistrict,
                CreatedAt = enterprise.CreatedAt,
                Disabled = enterprise.Disabled
            };

            return Ok(new { data = response });
        }

        // POST: api/enterprise
        [HttpPost]
        public async Task<ActionResult<EnterpriseResponseDto>> CreateEnterprise(CreateEnterpriseDto createDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { detail = "Invalid data provided" });
            }

            var enterprise = new Enterprise
            {
                Title = createDto.Title,
                Phone = createDto.Phone,
                Email = createDto.Email,
                Balance = createDto.Balance,
                Address = createDto.Address,
                TaxNumber = createDto.TaxNumber,
                TaxProvince = createDto.TaxProvince,
                TaxDistrict = createDto.TaxDistrict,
                Verified = true, // Automatically verified
                CreatedAt = DateTime.UtcNow,
                Disabled = false
            };

            _context.Enterprises.Add(enterprise);
            await _context.SaveChangesAsync();

            var response = new EnterpriseResponseDto
            {
                Id = enterprise.Id,
                Title = enterprise.Title,
                Phone = enterprise.Phone,
                Email = enterprise.Email,
                Balance = enterprise.Balance,
                Verified = enterprise.Verified,
                Address = enterprise.Address,
                TaxNumber = enterprise.TaxNumber,
                TaxProvince = enterprise.TaxProvince,
                TaxDistrict = enterprise.TaxDistrict,
                CreatedAt = enterprise.CreatedAt,
                Disabled = enterprise.Disabled
            };

            return CreatedAtAction(nameof(GetEnterprise), new { id = enterprise.Id }, new { data = response });
        }

        // PUT: api/enterprise/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEnterprise(string id, UpdateEnterpriseDto updateDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { detail = "Invalid data provided" });
            }

            var enterprise = await _context.Enterprises.FindAsync(id);

            if (enterprise == null)
            {
                return NotFound(new { detail = "Enterprise not found" });
            }

            enterprise.Title = updateDto.Title;
            enterprise.Phone = updateDto.Phone;
            enterprise.Email = updateDto.Email;
            enterprise.Balance = updateDto.Balance;
            enterprise.Address = updateDto.Address;
            enterprise.TaxNumber = updateDto.TaxNumber;
            enterprise.TaxProvince = updateDto.TaxProvince;
            enterprise.TaxDistrict = updateDto.TaxDistrict;
            enterprise.Disabled = updateDto.Disabled;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EnterpriseExists(id))
                {
                    return NotFound(new { detail = "Enterprise not found" });
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // PATCH: api/enterprise/{id}/toggle-status
        [HttpPatch("{id}/toggle-status")]
        public async Task<IActionResult> ToggleEnterpriseStatus(string id)
        {
            var enterprise = await _context.Enterprises.FindAsync(id);

            if (enterprise == null)
            {
                return NotFound(new { detail = "Enterprise not found" });
            }

            enterprise.Disabled = !enterprise.Disabled;
            await _context.SaveChangesAsync();

            return Ok(new { data = new { disabled = enterprise.Disabled } });
        }

        // DELETE: api/enterprise/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEnterprise(string id)
        {
            var enterprise = await _context.Enterprises.FindAsync(id);

            if (enterprise == null)
            {
                return NotFound(new { detail = "Enterprise not found" });
            }

            _context.Enterprises.Remove(enterprise);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EnterpriseExists(string id)
        {
            return _context.Enterprises.Any(e => e.Id == id);
        }
    }
}
