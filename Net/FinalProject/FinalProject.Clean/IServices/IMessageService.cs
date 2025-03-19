using FinalProject.Core.IRepositories;
using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.IServices
{
    public interface IMessageService
    {
        IEnumerable<Message> GetAllMessages();
        Message? GetMessage(int id);
        Message Add(Message mes);
        Message UpDate(Message mes);
        void Delete(int id);
    }
}
