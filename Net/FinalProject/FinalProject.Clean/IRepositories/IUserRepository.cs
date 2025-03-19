using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.IRepositories
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
        User GetById(int id);
        User Add(User newUser);
        User Update(User upUser);
        void Delete(int id);
    }
}
