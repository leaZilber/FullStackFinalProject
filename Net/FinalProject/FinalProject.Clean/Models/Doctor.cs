﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        public Schedule DoctorSchedule;
        public Message Message { get; set; }
    }
}
