using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace YourApp.Services
{
    public class SimpleEmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        
        public SimpleEmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        
        public async Task<bool> SendEmailAsync(string to, string subject, string body)
        {
            try
            {
                // Get email settings from configuration
                string smtpServer = _configuration["Email:SmtpServer"];
                int port = int.Parse(_configuration["Email:Port"]);
                string username = _configuration["Email:Username"];
                string password = _configuration["Email:Password"];
                string from = _configuration["Email:SenderEmail"];
                string displayName = _configuration["Email:SenderName"];
                
                // Create the email message
                var message = new MailMessage
                {
                    From = new MailAddress(from, displayName),
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true
                };
                
                message.To.Add(new MailAddress(to));
                
                // Create and configure the SMTP client
                using (var client = new SmtpClient(smtpServer, port))
                {
                    client.EnableSsl = true;
                    client.Credentials = new NetworkCredential(username, password);
                    client.DeliveryMethod = SmtpDeliveryMethod.Network;
                    
                    // Send the email
                    await client.SendMailAsync(message);
                }
                
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending email: {ex.Message}");
                return false;
            }
        }
    }
    
    public interface IEmailService
    {
        Task<bool> SendEmailAsync(string to, string subject, string body);
    }
}
