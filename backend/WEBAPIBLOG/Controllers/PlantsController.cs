using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WEBAPIBLOG.Services;
using WEBAPIBLOG.Models;

namespace WEBAPIBLOG.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlantsController : ControllerBase
    {
        private readonly PlantService _plantService;

        public PlantsController(PlantService plantService)
        {
            _plantService = plantService;
        }

        [HttpGet]
        public ActionResult<List<Plant>> Get()
        {
            return _plantService.Get();
        }

        [HttpGet("{id}", Name = "GetPlant")]
        public ActionResult<Plant> Get(string id)
        {
            var plant = _plantService.Get(id);

            if (plant == null)
            {
                return NotFound();
            }

            return plant;
        }

        [HttpPost]
        public ActionResult<Plant> Create(Plant plant)
        {
            _plantService.Create(plant);
            return CreatedAtRoute("GetPlant", new { id = plant.Id.ToString() }, plant);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, Plant plantIn)
        {
            var plant = _plantService.Get(id);

            if (plant == null)
                return NotFound();

            _plantService.Update(id, plantIn);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var plant = _plantService.Get(id);

            if (plant == null)
                return NotFound();

            _plantService.Remove(plant.Id);

            return NoContent();
        }
    }
}