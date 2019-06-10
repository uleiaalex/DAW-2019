using System.Collections.Generic;
using System.Linq;
using WEBAPIBLOG.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace WEBAPIBLOG.Services
{
    public class PlantService
    {
        private readonly IMongoCollection<Plant> _plants;

        public PlantService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("PlantstoreDb"));
            var database = client.GetDatabase("PlantstoreDb");
            _plants = database.GetCollection<Plant>("Plants");
        }

        public List<Plant> Get()
        {
            return _plants.Find(plant => true).ToList();
        }

        public Plant Get(string id)
        {
            return _plants.Find<Plant>(plant => plant.Id == id).FirstOrDefault();
        }

        public Plant Create(Plant plant)
        {
            _plants.InsertOne(plant);
            return plant;
        }

        public void Update(string id, Plant plantIn)
        {
            _plants.ReplaceOne(plant => plant.Id == id, plantIn);
        }

        public void Remove(Plant plantIn)
        {
            _plants.DeleteOne(plant => plant.Id == plantIn.Id);
        }

        public void Remove(string id)
        {
            _plants.DeleteOne(plant => plant.Id == id);
        }
    }
}
