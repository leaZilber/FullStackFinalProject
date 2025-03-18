using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.IRepositories
{
    public interface IScheduleRepository
    {

        List<Schedule> GetAll();
        Schedule? GetById(int id);
        Schedule Add(Schedule newTestResault);
        Schedule Update(Schedule upSchedule);
        void Delete(int id);
    }
}
