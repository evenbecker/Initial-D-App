using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    // My Car Model, id defined by the mssql server after sending new car to it
    public class Car
    {
        public int Id { get; set; }

        [MaxLength(50, ErrorMessage = "Car name cannot exceed 50 characters.")]
        public string? Name { get; set; }

        [RegularExpression("^(Nissan|Toyota|Mazda|Mitsubishi|Honda|Subaru)$", ErrorMessage = "Invalid Car brand.")]
        public string? Category { get; set; } 

     

        public string? ImageSrc { get; set; }


        public override string ToString()
        {
            return "Id: " + Id + ", " + "Name: " + Name + ", " + "Category: " + Category + ", " +"ImageSrc: " + ImageSrc + ", ";
        }

    }
}
