using FinalProject.Core.IRepositories;
using FinalProject.Core.IServices;
using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Service.Services
{
    public class TestResaultService:ITestResualtService
    {
        private readonly ITestResualtRepository _testResaultRepository;
        public TestResaultService(ITestResualtRepository testResaultRepository)
        {
            _testResaultRepository = testResaultRepository;
        }
        public IEnumerable<TestResualt> GetAllTestResualt()
        {
            return _testResaultRepository.GetAll();
        }

        public TestResualt? GetTestResualt(int id)
        {
            return _testResaultRepository.GetById(id);
        }

        public TestResualt Add(TestResualt test)
        {
            return _testResaultRepository.Add(test);
        }
        public TestResualt UpDate(TestResualt test)
        {
            return _testResaultRepository.Update(test);
        }

        public void Delete(int id)
        {
            _testResaultRepository.Delete(id);
        }
    }
}
