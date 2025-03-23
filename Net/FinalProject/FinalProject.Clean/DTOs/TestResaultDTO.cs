using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.DTOs
{
    public class TestResaultDTO
    {
        public int TestId { get; set; }
        public DateTime TestDate { get; set; }
        public string ImageUrl { get; set; }
        public int PatientId { get; set; }
        public string Summary { get; set; }
    }
}
