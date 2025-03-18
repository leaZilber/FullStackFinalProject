using FinalProject.Core.Models;
using System;
using System.Collections.Generic;

namespace FinalProject.Data
{
    public class DataContext
    {
        public List<User> userList { get; set; }
        public List<Doctor> doctorList { get; set; }
        public List<Turn> turnList { get; set; }
        public List<Message> messagesList { get; set; }
        public List<Schedule> scheduleList { get; set; }
        public List<TestResualt> testResaultList { get; set; }
        public DataContext()
        {
            doctorList = new List<Doctor>();
            turnList = new List<Turn>();
            messagesList = new List<Message>();
            scheduleList = new List<Schedule>();
            testResaultList = new List<TestResualt>();

            userList = new List<User>
            {
                new User
                {
                    UserId = 1,
                    UserName = "John Doe",
                    UserEmail = "johndoe@example.com",
                    UserEncryptedPassword = "hashedpassword1",
                    UserRole = "Admin",
                    UserPhone = "123-456-7890",
                    UserAddress = "123 Main St, NY",
                    UserBirth = new DateTime(1990, 5, 15),
                    UserCreateDate = DateTime.Now.AddYears(-2),
                    UserUpdateDate = DateTime.Now.AddMonths(-1),
                    TestResualtArray = new TestResualt[]
                    {
                        new TestResualt
                        {
                            TestCode = 123,
                            TestDate = DateTime.Now,
                            ImageUrl = "https://example.com/test1.jpg",
                            PatientId = 1,
                            Summary = "Test came back normal"
                        }
                    },
                    MessagesArr = new Message[]
                    {
                        new Message
                        {
                            MessageId = 1,
                            SenderId = 2,
                            ReceiverId = 1,
                            MessageContent = "Hello John!",
                            MessageDate = DateTime.Now
                        }
                    },
                    TurnsArr = new Turn[]
                    {
                        new Turn
                        {
                            TurnId = 101,
                            TurnUserId = 1,
                            DoctorName = "Dr. Smith",
                            DoctorCode = 5678,
                            DateTurn = DateTime.Now.AddDays(2),
                            TurnLocate = "NYC Hospital",
                            ArrivalConfirmation = true
                        }
                    }
                },
                new User
                {
                    UserId = 2,
                    UserName = "Jane Smith",
                    UserEmail = "janesmith@example.com",
                    UserEncryptedPassword = "hashedpassword2",
                    UserRole = "User",
                    UserPhone = "234-567-8901",
                    UserAddress = "456 Elm St, CA",
                    UserBirth = new DateTime(1985, 8, 25),
                    UserCreateDate = DateTime.Now.AddYears(-1),
                    UserUpdateDate = DateTime.Now.AddDays(-10),
                    TestResualtArray= new TestResualt[]
                    {
                        new TestResualt
                        {
                            TestCode = 456,
                            TestDate = DateTime.Now.AddDays(-7),
                            ImageUrl = "https://example.com/test2.jpg",
                            PatientId = 2,
                            Summary = "Slight abnormalities detected, further analysis required"
                        }
                    },
                    MessagesArr = new Message[]
                    {
                        new Message
                        {
                            MessageId = 2,
                            SenderId = 1,
                            ReceiverId = 2,
                            MessageContent = "Hey Jane, how are you?",
                            MessageDate = DateTime.Now
                        }
                    },
                    TurnsArr = new Turn[]
                    {
                        new Turn
                        {
                            TurnId = 102,
                            TurnUserId = 2,
                            DoctorName = "Dr. Adams",
                            DoctorCode = 7890,
                            DateTurn = DateTime.Now.AddDays(5),
                            TurnLocate = "CA Medical Center",
                            ArrivalConfirmation = false
                        }
                    }
                }
            };

            doctorList = new List<Doctor>()
            {

            };
        }
    }
}
