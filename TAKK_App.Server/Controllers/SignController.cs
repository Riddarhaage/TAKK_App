using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TAKK_App.Server.Models;

namespace TAKK_App.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SignController : ControllerBase
    {
        private static readonly IEnumerable<Sign> Signs = new List<Sign>
        {
            new Sign
            {
                Id = 1,
                Title = "abborre",
                ImgUrl = "https://localhost:7051/Sign/images/abborre.svg",
                Category = "Category 1",
                Description = "Description 1"
            },
            new Sign
            {
                Id = 2,
                Title = "A (bokstav)",
                ImgUrl = "https://localhost:7051/Sign/images/A%20(bokstav).svg",
                Category = "Category 2",
                Description = "Description 2"
            },
            new Sign
            {
                Id = 3,
                Title = "addition",
                ImgUrl = "https://localhost:7051/Sign/images/addition.svg",
                Category = "Category 3",
                Description = "Description 3"
            },
            new Sign
            {
                Id = 4,
                Title = "adjektiv",
                ImgUrl = "https://localhost:7051/Sign/images/adjektiv.svg",
                Category = "Category 4",
                Description = "Description 4"
            },
            new Sign
            {
                Id = 5,
                Title = "adress",
                ImgUrl = "https://localhost:7051/Sign/images/adress.svg",
                Category = "Category 5",
                Description = "Description 5"
            },
            new Sign
            {
                Id = 6,
                Title = "advent 1",
                ImgUrl = "https://localhost:7051/Sign/images/advent%201.svg",
                Category = "Category 6",
                Description = "Description 6"
            },
            new Sign
            {
                Id = 7,
                Title = "Sign 7",
                ImgUrl = "https://via.placeholder.com/150",
                Category = "Category 7",
                Description = "Description 7"
            },
            new Sign
            {
                Id = 8,
                Title = "Sign 8",
                ImgUrl = "https://via.placeholder.com/150",
                Category = "Category 8",
                Description = "Description 8"
            },
            new Sign
            {
                Id = 9,
                Title = "Sign 9",
                ImgUrl = "https://via.placeholder.com/150",
                Category = "Category 9",
                Description = "Description 9"
            },
            new Sign
            {
                Id = 10,
                Title = "Sign 10",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 11,
                Title = "Sign 11",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 12,
                Title = "Sign 12",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 13,
                Title = "Sign 13",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 14,
                Title = "Sign 14",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 15,
                Title = "Sign 15",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 16,
                Title = "Sign 16",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 17,
                Title = "Sign 17",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 18,
                Title = "Sign 18",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 19,
                Title = "Sign 19",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 20,
                Title = "Sign 20",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 21,
                Title = "Sign 21",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 22,
                Title = "Sign 22",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 23,
                Title = "Sign 23",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 24,
                Title = "Sign 24",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 25,
                Title = "Sign 25",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 26,
                Title = "Sign 26",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 27,
                Title = "Sign 27",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 28,
                Title = "Sign 28",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 29,
                Title = "Sign 29",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 30,
                Title = "Sign 30",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 31,
                Title = "Sign 31",
                ImgUrl = "https://via.placeholder.com/150",
            },
            new Sign
            {
                Id = 32,
                Title = "Sign 32",
                ImgUrl = "https://via.placeholder.com/150",
            },
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Signs);
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
