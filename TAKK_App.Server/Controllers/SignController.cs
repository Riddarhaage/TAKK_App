using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;
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

        [HttpGet("{categories}")]
        public async Task<ActionResult<IEnumerable<Sign>>> GetItems(string categories)
        {
            return await _context.Signs.Where(s => s.Categories.ToLower().Contains(categories.ToLower())).ToListAsync();
        }

        [HttpGet("search/{title}")]
        public async Task<ActionResult<IEnumerable<Sign>>> SearchItems(string title)
        {
            return await _context.Signs.Where(s => s.Title.ToLower().StartsWith(title.ToLower())).ToListAsync();
        }

        [HttpGet("get/{firstChar}")]
        public async Task<ActionResult<IEnumerable<Sign>>> GetItemsByFirstChar(string firstChar)
        {
            if (firstChar == "0-9")
            {
                return await _context.Signs
                    .Where(s => EF.Functions.Like(s.Title, "0%") ||
                                EF.Functions.Like(s.Title, "1%") ||
                                EF.Functions.Like(s.Title, "2%") ||
                                EF.Functions.Like(s.Title, "3%") ||
                                EF.Functions.Like(s.Title, "4%") ||
                                EF.Functions.Like(s.Title, "5%") ||
                                EF.Functions.Like(s.Title, "6%") ||
                                EF.Functions.Like(s.Title, "7%") ||
                                EF.Functions.Like(s.Title, "8%") ||
                                EF.Functions.Like(s.Title, "9%"))
                    .ToListAsync();
            }
            else
            {
                return await _context.Signs
                    .Where(s => EF.Functions.Like(s.Title, firstChar + "%"))
                    .ToListAsync();
            }
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
