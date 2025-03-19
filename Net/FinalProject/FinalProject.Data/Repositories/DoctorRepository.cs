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
    public class DoctorRepository:IDoctorRepository
    {
        private readonly DataContext _context;
        public DoctorRepository(DataContext context)
        {
            _context = context;
        }
        public IEnumerable<Doctor> GetAll()
        {
            return _context.doctorList.Include(d=>d.DoctorSchedule);
        }

        public Doctor? GetById(int id)
        {
            return _context.doctorList.FirstOrDefault(item => item.DoctorCode == id);
        }

        public Doctor Add(Doctor newDoctor)
        {
            _context.doctorList.Add(newDoctor);
            _context.SaveChanges();
            return newDoctor;
        }

        public Doctor Update(Doctor upDoctor)
        {
            var isExist = GetById(upDoctor.DoctorCode);
            if (isExist is null)
            {
                throw new Exception("Doctor not found");
            }
            _context.doctorList.Remove(isExist);
            _context.doctorList.Add(isExist);
            _context.SaveChanges();
            return isExist;
        }

        public void Delete(int id)
        {
            var isExist = GetById(id);
            if (isExist is not null)
            {
                _context.doctorList.Remove(isExist);
            }
            _context.SaveChanges();
        }
    }
}
