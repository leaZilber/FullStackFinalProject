using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Data.Repositories
{
    public class MessageRepositiory
    {
        private readonly DataContext _context;
        public MessageRepositiory(DataContext context)
        {
            _context = context;
        }
        public List<Message> GetAll()
        {
            return _context.messagesList;
        }

        public Message? GetById(int id)
        {
            return _context.messagesList.FirstOrDefault(item => item.MessageId == id);
        }

        public Message Add(Message newMessage)
        {
            _context.messagesList.Add(newMessage);
            return newMessage;
        }

        public Message Update(Message upMessage)
        {
            var isExist = GetById(upMessage.MessageId);
            if (isExist is null)
            {
                throw new Exception("Message not found");
            }
            _context.messagesList.Remove(isExist);
            _context.messagesList.Add(isExist);
            return isExist;
        }

        public void Delete(int id)
        {
            var isExist = GetById(id);
            if (isExist is not null)
            {
                _context.messagesList.Remove(isExist);
            }
        }
    }
}
