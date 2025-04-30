using System;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Configuration;
using MimeKit;

namespace YourApp.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        
        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        
        public async Task<bool> SendAppointmentReminderAsync(
            string recipientEmail, 
            string recipientName,
            string appointmentDate,
            string appointmentTime,
            string doctorName,
            string department,
            string location,
            string additionalMessage = null)
        {
            try
            {
                var message = new MimeMessage();
                
                message.From.Add(new MailboxAddress(
                    _configuration["Email:SenderName"],
                    _configuration["Email:SenderEmail"]
                ));
                
                message.To.Add(new MailboxAddress(recipientName, recipientEmail));
                
                message.Subject = "תזכורת לתור רפואי";
                
                var builder = new BodyBuilder();
                
                // Create HTML email body
                builder.HtmlBody = $@"
                <!DOCTYPE html>
                <html dir='rtl' lang='he'>
                <head>
                    <meta charset='UTF-8'>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                    <title>תזכורת לתור רפואי</title>
                    <style>
                        body {{
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333333;
                            margin: 0;
                            padding: 0;
                        }}
                        .container {{
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }}
                        .header {{
                            background-color: #00bcd4;
                            color: white;
                            padding: 20px;
                            text-align: center;
                            border-radius: 5px 5px 0 0;
                        }}
                        .content {{
                            background-color: #f5f5f5;
                            padding: 20px;
                            border-radius: 0 0 5px 5px;
                        }}
                        .appointment-details {{
                            background-color: white;
                            padding: 15px;
                            border-radius: 5px;
                            margin-bottom: 20px;
                        }}
                        .appointment-item {{
                            margin-bottom: 10px;
                        }}
                        .label {{
                            font-weight: bold;
                            color: #00bcd4;
                        }}
                        .additional-message {{
                            background-color: white;
                            padding: 15px;
                            border-radius: 5px;
                            margin-top: 20px;
                            border-right: 4px solid #00bcd4;
                        }}
                        .footer {{
                            text-align: center;
                            margin-top: 20px;
                            font-size: 12px;
                            color: #666666;
                        }}
                    </style>
                </head>
                <body>
                    <div class='container'>
                        <div class='header'>
                            <h1>תזכורת לתור הרפואי שלך</h1>
                        </div>
                        <div class='content'>
                            <p>שלום {recipientName},</p>
                            <p>זוהי תזכורת לתור הרפואי הקרוב שלך:</p>
                            
                            <div class='appointment-details'>
                                <div class='appointment-item'>
                                    <span class='label'>תאריך:</span> {appointmentDate}
                                </div>
                                <div class='appointment-item'>
                                    <span class='label'>שעה:</span> {appointmentTime}
                                </div>
                                <div class='appointment-item'>
                                    <span class='label'>רופא:</span> {doctorName}
                                </div>
                                <div class='appointment-item'>
                                    <span class='label'>מחלקה:</span> {department}
                                </div>
                                <div class='appointment-item'>
                                    <span class='label'>מיקום:</span> {location}
                                </div>
                            </div>
                            
                            <p>אנא הגע/י כ-15 דקות לפני הזמן המתוכנן.</p>
                            
                            {(!string.IsNullOrEmpty(additionalMessage) ? $@"
                            <div class='additional-message'>
                                <p>{additionalMessage}</p>
                            </div>" : "")}
                            
                            <p>אם עליך לבטל או לשנות את התור, אנא צור/י קשר בהקדם האפשרי.</p>
                            
                            <p>בברכה,<br>צוות המרפאה</p>
                            
                            <div class='footer'>
                                <p>הודעה זו נשלחה באופן אוטומטי, אנא אל תשיב/י להודעה זו.</p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>";
                
                message.Body = builder.ToMessageBody();
                
                using (var client = new SmtpClient())
                {
                    await client.ConnectAsync(
                        _configuration["Email:SmtpServer"],
                        int.Parse(_configuration["Email:Port"]),
                        SecureSocketOptions.StartTls
                    );
                    
                    await client.AuthenticateAsync(
                        _configuration["Email:Username"],
                        _configuration["Email:Password"]
                    );
                    
                    await client.SendAsync(message);
                    await client.DisconnectAsync(true);
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
        Task<bool> SendAppointmentReminderAsync(
            string recipientEmail, 
            string recipientName,
            string appointmentDate,
            string appointmentTime,
            string doctorName,
            string department,
            string location,
            string additionalMessage = null);
    }
}
