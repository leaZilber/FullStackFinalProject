using FinalProject.Core.Models;

namespace FinalProject.API.Models
{
    public class SchedulePostModel
    {
        public int ScheduleId { get; set; }
        public string DoctorName { get; set; }
        //public List<Turn> turns { get; set; } = new List<Turn>();
    }
}
