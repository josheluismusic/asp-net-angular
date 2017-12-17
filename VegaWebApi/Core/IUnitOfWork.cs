using System.Threading.Tasks;

namespace VegaWebApi.Core
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}