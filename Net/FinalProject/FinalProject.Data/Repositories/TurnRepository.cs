using FinalProject.Core.IRepositories;
using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Data.Repositories
{
    public class TurnRepository:ITurnRepository
    {
        private readonly DataContext _context;
        public TurnRepository(DataContext context)
        {
            _context = context;
        }
        public List<Turn> GetAll()
        {
            return _context.turnList;
        }

        public Turn? GetById(int id)
        {
            return _context.turnList.FirstOrDefault(item => item.TurnId == id);
        }

        public Turn Add(Turn newTurn)
        {
            _context.turnList.Add(newTurn);
            return newTurn;
        }

        public Turn Update(Turn upTurn)
        {
            var isExist = GetById(upTurn.TurnId);
            if (isExist is null)
            {
                throw new Exception("Turn not found");
            }
            _context.turnList.Remove(isExist);
            _context.turnList.Add(isExist);
            return isExist;
        }

        public void Delete(int id)
        {
            var isExist = GetById(id);
            if (isExist is not null)
            {
                _context.turnList.Remove(isExist);
            }
        }
    }
}
