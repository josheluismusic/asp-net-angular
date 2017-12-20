using System.Threading.Tasks;
using VegaWebApi.Core.Models;

namespace VegaWebApi.Core
{
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id, bool includeRelated = true);
        Task<Vehicle> GetVehicleWhitMake(int id);

        void Add(Vehicle vehicle);
        void Remove(Vehicle vehicle);
    }
}