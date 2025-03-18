using FinalProject.Core.IServices;
using FinalProject.Core.Models;
using FinalProject.Service.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FinalProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TurnController : ControllerBase
    {
        private readonly ITurnService _turnService;
        public TurnController(ITurnService turnService)
        {
            _turnService = turnService;
        }
        // GET: api/<TurnController>
        [HttpGet]
        public ActionResult Get()
        {
            var turns = _turnService.GetAllTurns();
            return Ok(turns);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var turn = _turnService.GetTurn(id);
            return Ok(turn);
        }

        // POST api/<UserController>
        [HttpPost]
        public ActionResult Post([FromBody] Turn value)
        {
            var newTurn = _turnService.Add(value);
            return Ok(newTurn);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public ActionResult Put([FromBody] Turn value)
        {
            var upTurn = _turnService.UpDate(value);
            return Ok(upTurn);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _turnService.Delete(id);
            return Ok();
        }
    }
}
