using FinalProject.Core.IRepositories;
using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.IServices
{
    public interface IScheduleService
    {
        IEnumerable<Schedule> GetAllSchedules();
        Schedule? GetSchedule(int id);
        Schedule Add(Schedule sched);
        Schedule UpDate(Schedule user);
        void Delete(int id);
    }
}
