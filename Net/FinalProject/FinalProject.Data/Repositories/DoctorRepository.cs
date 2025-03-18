using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Data.Repositories
{
    public class DoctorRepository
    {
        private readonly DataContext _context;
        public DoctorRepository(DataContext context)
        {
            _context = context;
        }
        public List<Doctor> GetAll()
        {
            return _context.doctorList;
        }

        public Doctor? GetById(int id)
        {
            return _context.doctorList.FirstOrDefault(item => item.DoctorCode == id);
        }

        public Doctor Add(Doctor newDoctor)
        {
            _context.doctorList.Add(newDoctor);
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
            return isExist;
        }

        public void Delete(int id)
        {
            var isExist = GetById(id);
            if (isExist is not null)
            {
                _context.doctorList.Remove(isExist);
            }
        }
    }
}
