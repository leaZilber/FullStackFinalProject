using FinalProject.Core.IRepositories;
using FinalProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinalProject.Core.IServices
{
    public interface ITurnService
    {
        IEnumerable<Turn> GetAllTurns();
        Turn? GetTurn(int id);
        Turn Add(Turn turn);
        Turn UpDate(Turn turn);
        void Delete(int id);
    }
}
