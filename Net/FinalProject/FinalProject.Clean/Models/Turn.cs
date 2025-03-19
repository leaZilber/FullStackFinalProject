using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Models
{
    public class Turn
    {
        [Key]
        public int TurnId { get; set; }
        public int TurnUserId { get; set; }
        public string DoctorName { get; set; }
        public int DoctorCode { get; set; }
        public DateTime DateTurn { get; set; }
        public string TurnLocate { get; set; }
        public string Hour { get; set; }
        public bool ArrivalConfirmation { get; set; }
        public User User { get; set; }
    }
}
