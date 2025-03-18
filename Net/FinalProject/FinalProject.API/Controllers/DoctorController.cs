using FinalProject.Core.IServices;
using FinalProject.Core.Models;
using FinalProject.Service.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FinalProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorService _doctorService;
        public DoctorController(IDoctorService doctorService)
        {
            _doctorService = doctorService;
        }

        // GET: api/<DoctorController>
        [HttpGet]
        public ActionResult Get()
        {
            var doctors = _doctorService.GetAllDoctors();
            return Ok(doctors);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var doctor = _doctorService.GetDoctor(id);
            return Ok(doctor);
        }

        // POST api/<UserController>
        [HttpPost]
        public ActionResult Post([FromBody] Doctor value)
        {
            var newDoctor = _doctorService.Add(value);
            return Ok(newDoctor);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public ActionResult Put([FromBody] Doctor value)
        {
            var upDoctor = _doctorService.UpDate(value);
            return Ok(upDoctor);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _doctorService.Delete(id);
            return Ok();
        }
    }
}
