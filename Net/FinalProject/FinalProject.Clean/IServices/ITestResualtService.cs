using FinalProject.Core.IRepositories;
using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.IServices
{
    public interface ITestResualtService
    {
        IEnumerable<TestResualt> GetAllTestResualt();
        TestResualt? GetTestResualt(int id);
        TestResualt Add(TestResualt test);
        TestResualt UpDate(TestResualt test);
        void Delete(int id);
    }
}
