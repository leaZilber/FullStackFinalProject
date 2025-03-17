using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FinalProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestResualtController : ControllerBase
    {
        // GET: api/<TestResualtController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<TestResualtController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TestResualtController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TestResualtController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TestResualtController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
