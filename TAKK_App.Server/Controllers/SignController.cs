using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TAKK_App.Server.Models;

namespace TAKK_App.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SignController : ControllerBase
    {
        private readonly SignDbContext _context;

        public SignController(SignDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sign>>> GetItems()
        {
            return await _context.Signs.ToListAsync();
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            var filePath = Path.Combine("wwwroot/images", file.FileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return Ok(new { filePath });
        }

        [HttpPut("update-description")]
        public async Task<IActionResult> UpdateDescription(string title, string newDescription)
        {
            var sign = await _context.Signs
                                     .FirstOrDefaultAsync(s => s.Title.ToLower() == title.ToLower());

            if (sign == null)
            {
                return NotFound("Sign not found.");
            }

            sign.Description = newDescription;

            _context.Signs.Update(sign);
            await _context.SaveChangesAsync();

            return Ok("Description updated successfully.");
        }




        [HttpGet("images/{filename}")]
        public async Task<IActionResult> GetImage(string filename)
        {
            var filePath = Path.Combine("wwwroot/images", filename);
            var memory = new MemoryStream();
            using (var stream = new FileStream(filePath, FileMode.Open))
            {
                await stream.CopyToAsync(memory);
            }
            memory.Position = 0;
            return File(memory, "image/svg+xml", Path.GetFileName(filePath)); // Adjust content type based on file
        }

        [HttpPost]
        public IActionResult Post(IFormFile file)
        {
            return Ok("Hello World!");
        }
    }
}
