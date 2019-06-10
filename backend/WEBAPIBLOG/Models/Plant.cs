using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WEBAPIBLOG.Models
{
    public class Plant
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; }

        [BsonElement("Content")]
        public string Content { get; set; }

        [BsonElement("Category")]
        public string Category { get; set; }
    }
}
