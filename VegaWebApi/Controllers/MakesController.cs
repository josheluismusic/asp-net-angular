using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VegaWebApi.Controllers.Resources;
using VegaWebApi.Core.Models;
using VegaWebApi.Persistence;

namespace VegaWebApi.Controllers
{
    public class MakesController : Controller
    {
        private readonly VegaDbContext context;
        private readonly IMapper mapper;
        public MakesController(VegaDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
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