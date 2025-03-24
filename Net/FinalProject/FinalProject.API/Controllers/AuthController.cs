using FinalProject.API.Models;
using FinalProject.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace FinalProject.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly DataContext _context;

        public AuthController(IConfiguration configuration, DataContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            // חיפוש משתמש לפי שם משתמש
            var user = await _context.userList
                .FirstOrDefaultAsync(u => u.UserId == loginModel.LoginId);

            if (user == null || user.UserEncryptedPassword != loginModel.Password)
            {
                return Unauthorized(new { message = "Invalid credentials" });
            }

            // יצירת הרשאות לטוקן
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserEmail),
                new Claim(ClaimTypes.Role, user.UserRole)
            };

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var tokenOptions = new JwtSecurityToken(
                issuer: _configuration["JWT:Issuer"],
                audience: _configuration["JWT:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(30),
                signingCredentials: signinCredentials
            );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return Ok(new { Token = tokenString });
        }
    }
}