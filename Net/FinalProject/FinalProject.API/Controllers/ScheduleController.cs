using FinalProject.Core.IServices;
using FinalProject.Core.Models;
using FinalProject.Service.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FinalProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        private readonly IScheduleService _scheduleService;
        public ScheduleController(IScheduleService scheduleService)
        {
            _scheduleService = scheduleService;
        }
        // GET: api/<ScheduleController>
        [HttpGet]
        public ActionResult Get()
        {
            var sched = _scheduleService.GetAllSchedules();
            return Ok(sched);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var sched = _scheduleService.GetSchedule(id);
            return Ok(sched);
        }

        // POST api/<UserController>
        [HttpPost]
        public ActionResult Post([FromBody] Schedule value)
        {
            var newSchedule = _scheduleService.Add(value);
            return Ok(newSchedule);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public ActionResult Put([FromBody] Schedule value)
        {
            var upSchedule = _scheduleService.UpDate(value);
            return Ok(upSchedule);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _scheduleService.Delete(id);
            return Ok();
        }
    }
}
