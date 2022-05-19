namespace Git.Controllers
{
    using Git.Data;
    using Git.Data.Models;
    using Git.Models.Commits;
    using MyWebServer.Controllers;
    using MyWebServer.Http;
    using System.Linq;

    using static Data.DataConstants;

    public class CommitsController : Controller
    {
        private readonly GitDbContext data;

        public CommitsController(GitDbContext data) => this.data = data;

        [Authorize]
        public HttpResponse All()
        {
            var commits = data
                .Commits
                .Where(c => c.CreatorId == User.Id)
                .OrderByDescending(c => c.CreatedOn)
                .Select(c => new CommitListingViewModel
                {
                    Id = c.Id,
                    Description = c.Description,
                    CreatedOn = c.CreatedOn.ToLocalTime().ToString("F"),
                    Repository = c.Repository.Name
                })
                .ToList();

            return View(commits);
        }

        [Authorize]
        public HttpResponse Create(string id)
        {
            var repository = data
                .Repositories
                .Where(r => r.Id == id)
                .Select(r => new CommitToRepositoryViewModel
                {
                    Id = r.Id,
                    Name = r.Name
                })
                .FirstOrDefault();

            if (repository == null)
            {
                return BadRequest();
            }

            return View(repository);
        }

        [HttpPost]
        [Authorize]
        public HttpResponse Create(CreateCommitFormModel model)
        {
            if (!data.Repositories.Any(r => r.Id == model.Id))
            {
                return NotFound();
            }

            if (model.Description.Length < CommitMinDescription)
            {
                return Error($"Commit description have be at least {CommitMinDescription} characters.");
            }

            var commit = new Commit
            {
                Description = model.Description,
                RepositoryId = model.Id,
                CreatorId = User.Id
            };

            data.Commits.Add(commit);
            data.SaveChanges();

            return Redirect("/Repositories/All");
        }
       
        [Authorize]
        public HttpResponse Delete(string id)
        {
            var commit = data.Commits.Find(id);

            if (commit == null || commit.CreatorId != User.Id)
            {
                return BadRequest();
            }

            data.Commits.Remove(commit);
            data.SaveChanges();

            return Redirect("/Commits/All");
        }
    }
}
