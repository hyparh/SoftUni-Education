namespace KenovServer.Data
{
    public class DbContext
    {
        public IEnumerable<Cat> AllCats()
            => new List<Cat>
            {
                new Cat{Id = 1, Name = "Maca", Age = 3, Owner = new Owner{ Id = 1, Name = "Pesho" } },
                new Cat{Id = 2, Name = "Macho", Age = 5, Owner = new Owner{ Id = 2, Name = "George" } },
                new Cat{Id = 3, Name = "Damon", Age = 2, Owner = new Owner{ Id = 3, Name = "Todor" } }
            };
    }
}
