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
    public class TurnService:ITurnService
    {
        private readonly ITurnRepository _turnRepository;
        public TurnService(ITurnRepository turnRepository)
        {
            _turnRepository = turnRepository;
        }
        public IEnumerable<Turn> GetAllTurns()
        {
            return _turnRepository.GetAll();
        }

        public Turn? GetTurn(int id)
        {
            return _turnRepository.GetById(id);
        }

        public Turn Add(Turn turn)
        {
            return _turnRepository.Add(turn);
        }
        public Turn UpDate(Turn turn)
        {
            return _turnRepository.Update(turn);
        }

        public void Delete(int id)
        {
            _turnRepository.Delete(id);
        }

    }
}
