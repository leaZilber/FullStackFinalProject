using FinalProject.Core.IServices;
using FinalProject.Core.Models;
using FinalProject.Service.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FinalProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestResualtController : ControllerBase
    {
        private readonly ITestResualtService _testResualtService;
        public TestResualtController(ITestResualtService testResualtService)
        {
            _testResualtService = testResualtService;
        }
        // GET: api/<TestResualtController>
        [HttpGet]
        public ActionResult Get()
        {
            var testResualts = _testResualtService.GetAllTestResualt();
            return Ok(testResualts);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var test = _testResualtService.GetTestResualt(id);
            return Ok(test);
        }

        // POST api/<UserController>
        [HttpPost]
        public ActionResult Post([FromBody] TestResualt value)
        {
            var newTestResault = _testResualtService.Add(value);
            return Ok(newTestResault);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public ActionResult Put([FromBody] TestResualt value)
        {
            var upTest = _testResualtService.UpDate(value);
            return Ok(upTest);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _testResualtService.Delete(id);
            return Ok();
        }
    }
}
