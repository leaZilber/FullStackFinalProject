using FinalProject.Core.IRepositories;
using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Data.Repositories
{
    public class ScheduleRepositiory:IScheduleRepository
    {
        private readonly DataContext _context;
        public ScheduleRepositiory(DataContext context)
        {
            _context = context;
        }
        public List<Schedule> GetAll()
        {
            return _context.scheduleList;
        }

        public Schedule? GetById(int id)
        {
            return _context.scheduleList.FirstOrDefault(item => item.ScheduleId == id);
        }

        public Schedule Add(Schedule newTestResault)
        {
            _context.scheduleList.Add(newTestResault);
            return newTestResault;
        }

        public Schedule Update(Schedule upSchedule)
        {
            var isExist = GetById(upSchedule.ScheduleId);
            if (isExist is null)
            {
                throw new Exception("Schedule not found");
            }
            _context.scheduleList.Remove(isExist);
            _context.scheduleList.Add(isExist);
            return isExist;
        }

        public void Delete(int id)
        {
            var isExist = GetById(id);
            if (isExist is not null)
            {
                _context.scheduleList.Remove(isExist);
            }
        }
    }
}
