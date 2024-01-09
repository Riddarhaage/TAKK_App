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

        private static readonly IEnumerable<Sign> Signs = new List<Sign>
        {
            new Sign
            {
                Id = 1,
                Title = "abborre",
                ImgUrl = "https://localhost:7051/Sign/images/abborre.svg",
                Categories = ["Djur"],
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas orci libero, aliquam a semper quis, iaculis et ex. Integer eget."
            },
            new Sign
            {
                Id = 2,
                Title = "A (bokstav)",
                ImgUrl = "https://localhost:7051/Sign/images/A%20(bokstav).svg",
                Categories = ["Djur","Bokstäver"],
                Description = "Description 2"
            },
            new Sign
            {
                Id = 3,
                Title = "addition",
                ImgUrl = "https://localhost:7051/Sign/images/addition.svg",
                Categories = ["Övrigt"],
                Description = "Description 3"
            },
            new Sign
            {
                Id = 4,
                Title = "adjektiv",
                ImgUrl = "https://localhost:7051/Sign/images/adjektiv.svg",
                Categories = ["Övrigt"],
                Description = "Description 4"
            },
            new Sign
            {
                Id = 5,
                Title = "adress",
                ImgUrl = "https://localhost:7051/Sign/images/adress.svg",
                Categories = ["Övrigt"],
                Description = "Description 5"
            },
            new Sign
            {
                Id = 6,
                Title = "advent 1",
                ImgUrl = "https://localhost:7051/Sign/images/advent%201.svg",
                Categories = ["Övrigt","Djur"],
                Description = "Description 6"
            },
            new Sign
            {
                Id = 7,
                Title = "Sign 7",
                ImgUrl = "https://localhost:7051/Sign/images/alltid.svg",
                Categories = ["Övrigt"],
                Description = "Description 7"
            },
            new Sign
            {
                Id = 8,
                Title = "Sign 8",
                ImgUrl = "https://localhost:7051/Sign/images/allt.svg",
                Categories = ["Övrigt"],
                Description = "Description 8"
            },
            new Sign
            {
                Id = 9,
                Title = "Sign 9",
                ImgUrl = "https://localhost:7051/Sign/images/allmänhet.svg",
                Categories = ["Övrigt"],
                Description = "Description 9"
            },
            new Sign
            {
                Id = 10,
                Title = "Sign 10",
                ImgUrl = "https://localhost:7051/Sign/images/allmän.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 11,
                Title = "Sign 11",
                ImgUrl = "https://localhost:7051/Sign/images/allihop.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 12,
                Title = "Sign 12",
                ImgUrl = "https://localhost:7051/Sign/images/allergi.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 13,
                Title = "Sign 13",
                ImgUrl = "https://localhost:7051/Sign/images/alla.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 14,
                Title = "Sign 14",
                ImgUrl = "https://localhost:7051/Sign/images/all.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 15,
                Title = "Sign 15",
                ImgUrl = "https://localhost:7051/Sign/images/alkohol.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 16,
                Title = "Sign 16",
                ImgUrl = "https://localhost:7051/Sign/images/algoritm.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 17,
                Title = "Sign 17",
                ImgUrl = "https://localhost:7051/Sign/images/advokat.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 18,
                Title = "Sign 18",
                ImgUrl = "https://localhost:7051/Sign/images/affisch.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 19,
                Title = "Sign 19",
                ImgUrl = "https://localhost:7051/Sign/images/affär.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 20,
                Title = "Sign 20",
                ImgUrl = "https://localhost:7051/Sign/images/Afghanistan%201.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 21,
                Title = "Sign 21",
                ImgUrl = "https://localhost:7051/Sign/images/Afrika.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 22,
                Title = "Sign 22",
                ImgUrl = "https://localhost:7051/Sign/images/afton.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 23,
                Title = "Sign 23",
                ImgUrl = "https://localhost:7051/Sign/images/akta.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 24,
                Title = "Sign 24",
                ImgUrl = "https://localhost:7051/Sign/images/aktie.svg",
            },
            new Sign
            {
                Id = 25,
                Title = "Sign 25",
                ImgUrl = "https://localhost:7051/Sign/images/aktiv.svg",
            },
            new Sign
            {
                Id = 26,
                Title = "Sign 26",
                ImgUrl = "https://localhost:7051/Sign/images/aktivitet.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 27,
                Title = "Sign 27",
                ImgUrl = "https://localhost:7051/Sign/images/akut.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 28,
                Title = "Sign 28",
                ImgUrl = "https://localhost:7051/Sign/images/akvarium.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 29,
                Title = "Sign 29",
                ImgUrl = "https://localhost:7051/Sign/images/alarm.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 30,
                Title = "Sign 30",
                ImgUrl = "https://localhost:7051/Sign/images/aldrig.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 31,
                Title = "Sign 31",
                ImgUrl = "https://localhost:7051/Sign/images/alfabet.svg",
                Categories = ["Övrigt"],
            },
            new Sign
            {
                Id = 32,
                ImgUrl = "https://localhost:7051/Sign/images/adventskalender.svg",
                Categories = ["Övrigt"],
            },
        };


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sign>>> GetItems()
        {
            //foreach(var sign in Signs)
            //{
            //    sign.SetTitleFromImgUrl();
            //}

            //return Ok(Signs);
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
