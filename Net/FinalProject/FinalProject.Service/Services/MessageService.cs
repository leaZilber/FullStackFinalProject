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
    public class MessageService:IMessageService
    {
        private readonly IMessageRepository _messageRepository;
        public MessageService(IMessageRepository messageRepository)
        {
            _messageRepository = messageRepository;

        }
        public List<Message> GetAllMessages()
        {
            return _messageRepository.GetAll();
        }

        public Message? GetMessage(int id)
        {
            return _messageRepository.GetById(id);
        }

        public Message Add(Message mes)
        {
            return _messageRepository.Add(mes);
        }
        public Message UpDate(Message mes)
        {
            return _messageRepository.Update(mes);
        }

        public void Delete(int id)
        {
            _messageRepository.Delete(id);
        }
    }
}
