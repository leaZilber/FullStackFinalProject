using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Data.Repositories
{
    public class TestResaltRepository
    {
        private readonly DataContext _context;
        public TestResaltRepository(DataContext context)
        {
            _context = context;
        }
        public List<TestResualt> GetAll()
        {
            return _context.testResaultList;
        }

        public TestResualt? GetById(int id)
        {
            return _context.testResaultList.FirstOrDefault(item => item.TestCode == id);
        }

        public TestResualt Add(TestResualt newTestResault)
        {
            _context.testResaultList.Add(newTestResault);
            return newTestResault;
        }

        public TestResualt Update(TestResualt upTestResault)
        {
            var isExist = GetById(upTestResault.TestCode);
            if (isExist is null)
            {
                throw new Exception("Test Resault not found");
            }
            _context.testResaultList.Remove(isExist);
            _context.testResaultList.Add(isExist);
            return isExist;
        }

        public void Delete(int id)
        {
            var isExist = GetById(id);
            if (isExist is not null)
            {
                _context.testResaultList.Remove(isExist);
            }
        }
    }
}
