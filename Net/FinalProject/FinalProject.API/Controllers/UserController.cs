﻿using AutoMapper;
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
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public UserController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }
        // GET: api/<UserController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var users =await _userService.GetAllUsersAsync();
            return Ok(users);
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {

            var user = _userService.GetUser(id);
            var userDto = _mapper.Map<UserDTO>(user);
            return Ok(userDto);
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] UserPostModel value)
        {
            var userPost = new User()
            {
                UserName = value.UserName,
                UserEmail = value.UserEmail,
                UserEncryptedPassword = value.UserEncryptedPassword,
                UserPhone = value.UserPhone,
                UserAddress = value.UserAddress,
                UserBirth = value.UserBirth,
                UserRole = value.UserRole,
            };
            var newUser = await _userService.AddAsync(userPost);
            return Ok(newUser);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put([FromBody] User value)
        {
            var upUser = await _userService.UpDateAsync(value);
            return Ok(upUser);

        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _userService.Delete(id);
            return Ok();
        }
    }
}
