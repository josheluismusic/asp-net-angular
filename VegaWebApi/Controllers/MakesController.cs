using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VegaWebApi.Controllers.Resources;
using VegaWebApi.Models;
using VegaWebApi.Persistence;

namespace VegaWebApi.Controllers
{
    public class MakesController : Controller
    {
        private readonly VegaDbContext context;
        public MakesController(VegaDbContext context, IMapper mapper)
        {
            this.context = context;
        }

        [HttpGet("api/makes")]
        public async Task<IEnumerable<MakeResource>> GetMakes() 
        {
            var makes = await context.Makes.Include(m => m.Models).ToListAsync();
            return Mapper.Map<List<Make>, List<MakeResource>>(makes);
        }

        [HttpGet("api/makes/{id}")]
        public async Task<MakeResource> GetMakes(int id) 
        {
            var make = await context.Makes.Include(m => m.Models).FirstOrDefaultAsync(x=> x.Id == id);
            return Mapper.Map<Make, MakeResource>(make);
        }
    }}