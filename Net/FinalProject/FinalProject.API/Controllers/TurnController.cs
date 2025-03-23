using AutoMapper;
using FinalProject.API.Models;
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
    public class TurnController : ControllerBase
    {
        private readonly ITurnService _turnService;
        private readonly IMapper _mapper;

        public TurnController(ITurnService turnService, IMapper mapper)
        {
            _turnService = turnService;
            _mapper = mapper;
        }
        // GET: api/<TurnController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var turns =await _turnService.GetAllTurnsAsync();
            return Ok(turns);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var turn = _turnService.GetTurn(id);
            var turnDto = _mapper.Map<TurnDTO>(turn);
            return Ok(turnDto);
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] TurnPostModel value)
        {
            var turnPost = new Turn()
            {
                TurnUserId = value.TurnUserId,
                DoctorCode = value.DoctorCode,
                DoctorName = value.DoctorName,
                TurnLocate = value.TurnLocate,
                Hour = value.Hour,
                ArrivalConfirmation = value.ArrivalConfirmation,
                ScheduleId = value.ScheduleId,
                DateTurn = value.DateTurn
            };
            var newTurn = await _turnService.AddAsync(turnPost);
            return Ok(newTurn);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put([FromBody] Turn value)
        {
            var upTurn = await _turnService.UpDateAsync(value);
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
