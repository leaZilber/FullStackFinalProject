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
        public int DoctorId { get; set; }
        public Turn[] turns { get; set; }
        public Doctor doctor { get; set; }
    }
}
