using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Models
{
    public class Message
    {
        [Key]
        public int MessageId { get; set; }
        public int UserId { get; set; }
        public int ReceiverId { get; set; }
        public string MessageContent { get; set; }
        public DateTime MessageDate { get; set; }
        public User User { get; set; }
        public Doctor Doctor { get; set; }
    }
}
