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
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public List<User> GetAllUsers()
        {
            return _userRepository.GetAll();
        }

        public User? GetUser(int id)
        {
            return _userRepository.GetById(id);
        }

        public User Add(User user)
        {
            return _userRepository.Add(user);
        }
        public User UpDate(User user)
        {
            return _userRepository.Update(user);
        }

        public void Delete(int id)
        {
            _userRepository.Delete(id);
        }
    }
}
