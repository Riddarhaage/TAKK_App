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
                Title = "Sign 1",
                ImgUrl = "https://via.placeholder.com/150",
                Category = "Category 1",
                Description = "Description 1"
            },
            new Sign
            {
                Id = 2,
                Title = "Sign 2",
                ImgUrl = "https://via.placeholder.com/150",
                Category = "Category 2",
                Description = "Description 2"
            },
            new Sign
            {
                Id = 3,
                Title = "Sign 3",
                ImgUrl = "https://via.placeholder.com/150",
                Category = "Category 3",
                Description = "Description 3"
            },
            new Sign
            {
                Id = 4,
                Title = "Sign 4",
                ImgUrl = "https://via.placeholder.com/150",
                Category = "Category 4",
                Description = "Description 4"
            },
            new Sign
            {
                Id = 5,
                Title = "Sign 5",
                ImgUrl = "https://via.placeholder.com/150",
                Category = "Category 5",
                Description = "Description 5"
            },
            new Sign
            {
                Id = 6,
                Title = "Sign 6",
                ImgUrl = "https://via.placeholder.com/150",
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
            }
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Signs);
        }

        [HttpPost]
        public IActionResult Post(IFormFile file)
        {
            return Ok("Hello World!");
        }
    }
}
