using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TAKK_App.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignController : ControllerBase
    {


        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Hello World!");
        }

        [HttpPost]
        public IActionResult Post(IFormFile file)
        {
            return Ok("Hello World!");
        }
    }
}
