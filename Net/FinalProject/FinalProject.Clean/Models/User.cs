using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Models
{
    public class User
    {
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
    }
}
