using AutoMapper;
using FinalProject.API.Models;
using FinalProject.Core;
using FinalProject.Core.DTOs;
using FinalProject.Core.IServices;
using FinalProject.Core.Models;
using FinalProject.Data;
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
            var turns = await _turnService.GetAllTurnsAsync();
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
        public async Task<IActionResult> Post([FromBody] TurnDTO newTurn)
        {
            if (newTurn == null)
            {
                return BadRequest("❌ נתוני התור חסרים.");
            }

            using (var context = new DataContext())
            {
                // 🔍 חיפוש ה-Schedule המתאים לפי שם הרופא
                var schedule = context.scheduleList
                    .FirstOrDefault(s => s.DoctorName == newTurn.DoctorName);

                if (schedule != null)
                {
                    // ✅ מצאנו את המערכת – נוסיף אליה את התור
                    var turn = new Turn
                    {
                        TurnUserId = newTurn.TurnUserId,
                        DoctorName = newTurn.DoctorName,
                        DateTurn = newTurn.DateTurn,
                        TurnLocate = newTurn.TurnLocate,
                        Hour = newTurn.Hour,
                        ArrivalConfirmation = newTurn.ArrivalConfirmation
                    };

                    schedule.turns.Add(turn);
                    await context.SaveChangesAsync();
                    return Ok("✅ התור נוסף בהצלחה!");
                }
                else
                {
                    return NotFound("❌ לא נמצאה מערכת עם שם הרופא הנתון.");
                }
            }
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
