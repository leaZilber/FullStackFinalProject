﻿//using MimeKit;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net.Mail;
//using System.Text;
//using System.Threading.Tasks;

//namespace FinalProject.Service
//{

//    public class EmailService
//    {
//        private readonly string _smtpServer = "smtp.yourmail.com";
//        private readonly int _smtpPort = 587;
//        private readonly string _smtpUser = "your_email@yourdomain.com";
//        private readonly string _smtpPassword = "your_password";

//        public async Task SendEmailAsync(string toEmail, string subject, string body)
//        {
//            var message = new MimeMessage();
//            message.From.Add(new MailboxAddress("Your App Name", _smtpUser));
//            message.To.Add(new MailboxAddress("", toEmail));
//            message.Subject = subject;

//            var bodyBuilder = new BodyBuilder { HtmlBody = body };
//            message.Body = bodyBuilder.ToMessageBody();

//            using var client = new SmtpClient();
//            try
//            {
//                await client.ConnectAsync(_smtpServer, _smtpPort, MailKit.Security.SecureSocketOptions.StartTls);
//                await client.AuthenticateAsync(_smtpUser, _smtpPassword);
//                await client.SendAsync(message);
//                await client.DisconnectAsync(true);
//            }
//            catch (Exception ex)
//            {
//                Console.WriteLine($"Email sending failed: {ex.Message}");
//            }
//        }
//    }

//}
