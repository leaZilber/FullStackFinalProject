using FinalProject.Core.IRepositories;
using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Service.Services
{
    public class DoctorService
    {
        private readonly IDoctorRepository _doctorRepository;
        public DoctorService(IDoctorRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;
        }
        public List<Doctor> GetAllDoctors()
        {
            return _doctorRepository.GetAll();
        }

        public Doctor? GetDoctor(int id)
        {
            return _doctorRepository.GetById(id);
        }

        public Doctor Add(Doctor doctor)
        {
            return _doctorRepository.Add(doctor);
        }
        public Doctor UpDate(Doctor doctor)
        {
            return _doctorRepository.Update(doctor);
        }

        public void Delete(int id)
        {
            _doctorRepository.Delete(id);
        }
    }
}
