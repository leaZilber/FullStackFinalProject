using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Models
{
    public class Schedule
    {
        [Key]
        public int ScheduleId { get; set; }
        public string DoctorName { get; set; }
        public List<Turn> turns { get; set; } = new List<Turn>();
    }
}
