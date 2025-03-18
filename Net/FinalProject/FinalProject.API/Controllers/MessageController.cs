using FinalProject.Core.IServices;
using FinalProject.Core.Models;
using FinalProject.Service.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FinalProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IMessageService _messageService;
        public MessageController(IMessageService messageService)
        {
            _messageService = messageService;
        }
        // GET: api/<MessageController>
        [HttpGet]
        public ActionResult Get()
        {
            var messages = _messageService.GetAllMessages();
            return Ok(messages);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var message = _messageService.GetMessage(id);
            return Ok(message);
        }

        // POST api/<UserController>
        [HttpPost]
        public ActionResult Post([FromBody] Message value)
        {
            var newMessage = _messageService.Add(value);
            return Ok(newMessage);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public ActionResult Put([FromBody] Message value)
        {
            var upMessage = _messageService.UpDate(value);
            return Ok(upMessage);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _messageService.Delete(id);
            return Ok();
        }
    }
}
