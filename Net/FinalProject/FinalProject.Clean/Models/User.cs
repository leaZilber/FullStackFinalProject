using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string UserEncryptedPassword { get; set; }
        public string UserRole { get; set; }
        public string UserPhone { get; set; }
        public string UserAddress { get; set; }
        public DateTime UserBirth { get; set; }
        public DateTime UserCreateDate { get; set; }
        public DateTime UserUpdateDate { get; set; }
        public TestResualt[] TestResualtArray { get; set; }
        public Message[] MessagesArr { get; set; }
        public Turn[] TurnsArr { get; set; }
        public List<Turn> turns { get; set; }
        public List<TestResualt> testResualts { get; set; }
        public List<Message> messages { get; set; }
        public Message Message { get; set; }
    }
}
