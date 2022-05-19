using Panda.Data;
using Panda.Data.Models;
using System;
using System.Linq;

namespace Panda.Services
{
    public class ReceiptsService : IReceiptsService
    {
        private readonly PandaDbContext db;

        public ReceiptsService(PandaDbContext db)
        {
            this.db = db;
        }

        public void CreateFromPackage(decimal weight, string packageId, string recipientId)
        {
            var receipt = new Receipt
            {
                PackageId = packageId,
                RecipientId = recipientId,
                Fee = weight * 2.67M,
                IssuedOn = DateTime.UtcNow,
            };

            db.Receipts.Add(receipt);
            db.SaveChanges();
        }

        public IQueryable<Receipt> GetAll()
        {
            return db.Receipts;
        }
    }
}
