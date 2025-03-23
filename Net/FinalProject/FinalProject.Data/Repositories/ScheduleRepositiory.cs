using FinalProject.Core.IRepositories;
using FinalProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Data.Repositories
{
    public class ScheduleRepositiory : IScheduleRepository
    {
        private readonly DataContext _context;
        public ScheduleRepositiory(DataContext context)
        {
            _context = context;
        }
        public async Task<List<Schedule>> GetAllAsync()
        {
            return await _context.scheduleList.Include(u => u.turns).ToListAsync();
        }

        public Schedule? GetById(int id)
        {
            return _context.scheduleList.FirstOrDefault(item => item.ScheduleId == id);
        }

        public async Task<Schedule> AddAsync(Schedule newTestResault)
        {
            _context.scheduleList.Add(newTestResault);
            await _context.SaveChangesAsync();
            return newTestResault;
        }

        public async Task<Schedule> UpdateAsync(Schedule upSchedule)
        {
            var isExist = GetById(upSchedule.ScheduleId);
            if (isExist is null)
            {
                throw new Exception("Schedule not found");
            }
            _context.scheduleList.Remove(isExist);
            _context.scheduleList.Add(isExist);
            await _context.SaveChangesAsync();
            return isExist;
        }

        public void Delete(int id)
        {
            var isExist = GetById(id);
            if (isExist is not null)
            {
                _context.scheduleList.Remove(isExist);
            }
            _context.SaveChanges();
        }
    }
}
