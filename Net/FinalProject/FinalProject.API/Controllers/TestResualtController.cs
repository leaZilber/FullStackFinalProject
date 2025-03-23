using AutoMapper;
using FinalProject.Core;
using FinalProject.Core.DTOs;
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
        private readonly IMapper _mapper;

        public TestResualtController(ITestResualtService testResualtService, IMapper mapper)
        {
            _testResualtService = testResualtService;
            _mapper = mapper;
        }
        // GET: api/<TestResualtController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var testResualts = await _testResualtService.GetAllTestResualtAsync();
            return Ok(testResualts);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var test = _testResualtService.GetTestResualt(id);
            var testDto = _mapper.Map<TestResaultDTO>(test);
            return Ok(testDto);
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] TestResualt value)
        {
            var newTestResault = await _testResualtService.AddAsync(value);
            return Ok(newTestResault);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put([FromBody] TestResualt value)
        {
            var upTest = await _testResualtService.UpDateAsync(value);
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
