using FinalProject.Core.IRepositories;
using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Service.Services
{
    public class ScheduleService
    {
        private readonly IScheduleRepository _scheduleRepository;
        public ScheduleService(IScheduleRepository scheduleRepository)
        {
            _scheduleRepository = scheduleRepository;
        }
        public List<Schedule> GetAllSchedules()
        {
            return _scheduleRepository.GetAll();
        }

        public Schedule? GetSchedule(int id)
        {
            return _scheduleRepository.GetById(id);
        }

        public Schedule Add(Schedule sched)
        {
            return _scheduleRepository.Add(sched);
        }
        public Schedule UpDate(Schedule user)
        {
            return _scheduleRepository.Update(user);
        }

        public void Delete(int id)
        {
            _scheduleRepository.Delete(id);
        }
    }
}
