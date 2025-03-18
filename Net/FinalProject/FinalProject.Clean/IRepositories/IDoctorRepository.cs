using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.IRepositories
{
    public interface IDoctorRepository
    {
        List<Doctor> GetAll();
        Doctor? GetById(int id);
        Doctor Add(Doctor newDoctor);
        Doctor Update(Doctor upDoctor);
        void Delete(int id);
    }
}
