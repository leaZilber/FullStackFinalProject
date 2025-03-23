﻿using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.DTOs
{
    public class ScheduleDTO
    {
        public int ScheduleId { get; set; }
        public int CodeD { get; set; }
        public List<Turn> turns { get; set; } = new List<Turn>();
    }
}
