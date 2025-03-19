using FinalProject.Core.IRepositories;
using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.IServices
{
    public interface IDoctorService
    {
        IEnumerable<Doctor> GetAllDoctors();
        Doctor? GetDoctor(int id);
        Doctor Add(Doctor doctor);
        Doctor UpDate(Doctor doctor);
        void Delete(int id);
    }
}
