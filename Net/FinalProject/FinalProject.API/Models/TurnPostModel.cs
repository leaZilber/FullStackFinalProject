namespace FinalProject.API.Models
{
    public class TurnPostModel
    {
        public int TurnUserId { get; set; }
        public string DoctorName { get; set; }
        public int DoctorCode { get; set; }
        public DateTime DateTurn { get; set; }
        public string TurnLocate { get; set; }
        public string Hour { get; set; }
        public bool ArrivalConfirmation { get; set; }
        public int ScheduleId { get; set; }
    }
}
