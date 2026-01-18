namespace Server.Models
{
    // My user model, no validations needed because i do not create new users in this website.
    public class User
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Password { get; set; }
       
    }
}
