using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.IRepositories
{
    public interface IMessageRepository
    {
        List<Message> GetAll();
        Message? GetById(int id);
        Message Add(Message newMessage);
        Message Update(Message upMessage);
        void Delete(int id);
    }
}
