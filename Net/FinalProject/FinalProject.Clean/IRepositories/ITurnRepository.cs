using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.IRepositories
{
    public interface ITurnRepository
    {
        IEnumerable<Turn> GetAll();
        Turn? GetById(int id);
        Turn Add(Turn newTurn);
        Turn Update(Turn upTurn);
        void Delete(int id);
    }
}
