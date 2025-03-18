using FinalProject.Core.IRepositories;
using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;
        }
        public List<User> GetAll()
        {
            return _context.userList;
        }

        public User? GetById(int id)
        {
            return _context.userList.FirstOrDefault(item => item.UserId == id);
        }

        public User Add(User newUser)
        {
            _context.userList.Add(newUser);
            return newUser;
        }

        public User Update(User upUser)
        {
            var isExist = GetById(upUser.UserId);
            if (isExist is null)
            {
                throw new Exception("User not found");
            }
            _context.userList.Remove(isExist);
            _context.userList.Add(isExist);
            return isExist;
        }

        public void Delete(int id)
        {
            var isExist = GetById(id);
            if (isExist is not null)
            {
                _context.userList.Remove(isExist);
            }
        }
    }
}
