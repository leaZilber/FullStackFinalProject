using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorCode { get; set; }
        public string FieldOfSpecialization { get; set; }
        public int LicenseNumber { get; set; }
        public int ScheduleId { get; set; }
        public Schedule schedule { get; set; }
    }
}
