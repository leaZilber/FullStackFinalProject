﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.Models
{
    public class TestResualt
    {
        [Key]
        public int TestId { get; set; }
        public DateTime TestDate { get; set; }
        public byte[] ImageFileData { get; set; }
        public int PatientId { get; set; }
        public string Summary { get; set; }
    }
}
