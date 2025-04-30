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
        // לוגין רגיל (ל-React)
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            if (loginModel == null || string.IsNullOrWhiteSpace(loginModel.UserName) || string.IsNullOrWhiteSpace(loginModel.Password))
            {
                return BadRequest(new { message = "Username and password are required." });
            }

            var user = await _context.userList
                .FirstOrDefaultAsync(u => u.UserName == loginModel.UserName);

            if (user == null || user.UserEncryptedPassword != loginModel.Password)
            {
                return Unauthorized(new { message = "Invalid username or password." });
            }

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

            return Ok(new { token = tokenString });
        }

        // לוגין למנהלים (ל-Angular)
        [HttpPost("admin-login")]
        public async Task<IActionResult> AdminLogin([FromBody] LoginModel loginModel)
        {
            if (loginModel == null || string.IsNullOrWhiteSpace(loginModel.UserName) || string.IsNullOrWhiteSpace(loginModel.Password))
            {
                return BadRequest(new { message = "Username and password are required." });
            }

            var user = await _context.userList
                .FirstOrDefaultAsync(u => u.UserName == loginModel.UserName);

            if (user == null || user.UserEncryptedPassword != loginModel.Password)
            {
                return Unauthorized(new { message = "Invalid username or password." });
            }

            // בדוק אם המשתמש הוא מנהל
            if (user.UserRole != "Admin")
            {
                return Unauthorized(new { message = "You do not have administrator privileges." });
            }

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

            return Ok(new { token = tokenString });
        }
    }
}