using AutoMapper;
using VegaWebApi.Controllers.Resources;
using VegaWebApi.Models;

namespace VegaWebApi.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Make, MakeResource>();
            CreateMap<Model, ModelResource>();
        }
    }
}