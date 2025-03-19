using FinalProject.Core.IRepositories;
using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.IServices
{
    public interface IUserService
    {
        IEnumerable<User> GetAllUsers();
        User? GetUser(int id);
        User Add(User user);
        User UpDate(User user);
        void Delete(int id);
    }
}
