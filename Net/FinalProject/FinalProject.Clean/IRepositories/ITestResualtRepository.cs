using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.IRepositories
{
    public interface ITestResualtRepository
    {
        List<TestResualt> GetAll();
        TestResualt? GetById(int id);
        TestResualt Add(TestResualt newTestResault);
        TestResualt Update(TestResualt upTestResault);
        void Delete(int id);
    }
}
