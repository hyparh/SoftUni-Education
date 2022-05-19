namespace VaporStore.DataProcessor
{
	using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.IO;
    using System.Linq;
    using System.Text;
    using System.Xml.Serialization;
    using Data;
    using Microsoft.EntityFrameworkCore;
    using Newtonsoft.Json;
    using VaporStore.Data.Models.Enums;
    using VaporStore.DataProcessor.Dto.Export;

    public static class Serializer
	{
		public static string ExportGamesByGenres(VaporStoreDbContext context, string[] genreNames)
		{
			var genres = context.Genres
				.ToArray()
				.Where(g => genreNames.Contains(g.Name))
				.Select(x => new
				{
					Id = x.Id,
					Genre = x.Name,
					Games = x.Games
						.Where(p => p.Purchases.Any())
						.Select(g => new
						{
							Id = g.Id,
							Title = g.Name,
							Developer = g.Developer.Name,
							Tags = string.Join(", ", g.GameTags.Select(t => t.Tag.Name)),
							Players = g.Purchases.Count
						})
						.OrderByDescending(p => p.Players)
						.ThenBy(g => g.Id)
						.ToArray(),
					TotalPlayers = x.Games.Sum(p => p.Purchases.Count)					
				})
				.OrderByDescending(t => t.TotalPlayers)
				.ThenBy(g => g.Id)
				.ToArray();

			string json = JsonConvert.SerializeObject(genres, Formatting.Indented);
			
			return json;

			//Stamo's big solution
			//---------------------

			//var games = new List<GameExportJsonDto>();
			//			
			//var gamesToProcess = context.Games
			//	.AsQueryable()				
			//	.Where(g => genreNames.Contains(g.Genre.Name))
			//	.Where(g => g.Purchases.Any())
			//	.Include(g => g.GameTags)
			//	.ThenInclude(gt => gt.Tag)
			//	.Include(g => g.Purchases)
			//	.Include(g => g.Genre)
			//	.ToArray();
			//
			//foreach (var genre in genreNames)
			//{
			//	var genreGames = gamesToProcess
			//		.Where(g => g.Genre.Name == genre)
			//		.ToList();
			//
			//    if (genreGames.Count is 0)
			//    {
			//		continue;
			//    }
			//
			//	var result = new GameExportJsonDto
			//	{
			//		Id = genreGames.First().Genre.Id,
			//		Genre = genreGames.First().Genre.Name,
			//		Games = genreGames
			//			.Select(g => new GameExDto
			//			{
			//				Id = g.Id,
			//				Developer = g.Developer.Name,
			//				Title = g.Name,
			//				Tags = string.Join(", ", g.GameTags.Select(t => t.Tag.Name)),
			//				Players = g.Purchases.Count
			//			})
			//			.OrderByDescending(g => g.Players)
			//			.ThenBy(g => g.Id)
			//			.ToArray()
			//	};		
			//	
			//	result.TotalPlayers = result.Games.Sum(g => g.Players);
			//
			//	games.Add(result);
			//}
			//
			//games = games
			//	.OrderByDescending(g => g.TotalPlayers)
			//	.ThenBy(g => g.Id)
			//	.ToList();

			//string json = JsonConvert.SerializeObject(games, Formatting.Indented);
			//
			//return json;
		}

		public static string ExportUserPurchasesByType(VaporStoreDbContext context, string storeType)
		{
			var sb = new StringBuilder();
			
			var xmlRoot = new XmlRootAttribute("Users");
			var xmlSerializer = new XmlSerializer(typeof(UserExportXmlDto[]), xmlRoot);
			
			var namespaces = new XmlSerializerNamespaces();
			namespaces.Add(string.Empty, string.Empty);
			
			using StringWriter sw = new StringWriter(sb);
			
			var users = new List<UserExportXmlDto>();

			var purchaseType = Enum.Parse<PurchaseType>(storeType);

			var usersExtract = context.Users
				.ToArray()
				.Select(x => new UserExportXmlDto
				{
					Username = x.Username,
					Purchases = x.Cards
						.SelectMany(p => p.Purchases)
						.Where(t => t.Type == purchaseType)
						.Select(p => new ExportPurchaseXmlDto
						{
							Card = p.Card.Number,
							Cvc = p.Card.Cvc,
							Date = p.Date.ToString("yyyy-MM-dd HH:mm", CultureInfo.InvariantCulture),
							Game = new ExportGameXmlDto
							{
								Title = p.Game.Name,
								Genre = p.Game.Genre.Name,								
								Price = p.Game.Price
							}
						})
						.OrderBy(d => d.Date)
						.ToArray(),
					TotalSpent = x.Cards.SelectMany(p => p.Purchases)
						.Where(t => t.Type == purchaseType)
						.Sum(p => p.Game.Price)
				})
				.Where(p => p.Purchases.Any())
				.OrderByDescending(t => t.TotalSpent)
				.ThenBy(u => u.Username)
				.ToArray();

			xmlSerializer.Serialize(sw, usersExtract, namespaces);

			return sb.ToString().TrimEnd();

			//Stamo's big solution
			//---------------------

			//var purchaseType = (PurchaseType)Enum.Parse(typeof(PurchaseType), storeType);

			//var usersToProcess = context.Purchases
			//	.AsQueryable()				
			//	.Where(p => p.Type == purchaseType)
			//	.Include(p => p.Game.Genre)
			//	.Include(p => p.Card.User)
			//	.ToArray()
			//	.GroupBy(p => p.Card.User.Username)
			//	.ToArray();
			//
			//foreach (var user in usersToProcess)
			//{
			//	var result = new UserExportXmlDto
			//	{
			//		username = user.Key,
			//		Purchases = user
			//			.OrderBy(p => p.Date)
			//			.Select(p => new UserPurchase
			//			{
			//				Card = p.Card.Number,
			//				Cvc = p.Card.Cvc,
			//				Date = p.Date.ToString("yyyy-MM-dd HH:mm"),
			//				Game = new UserPurchaseGame
			//				{
			//					Genre = p.Game.Genre.Name,
			//					Price = p.Game.Price,
			//					title = p.Game.Name
			//				}
			//			})
			//			.ToArray(),
			//	};
			//
			//	result.TotalSpent = result.Purchases
			//		.Select(p => p.Game.Price)
			//		.Sum();
			//
			//	users.Add(result);
			//}
			//
			//users = users
			//	.OrderByDescending(u => u.TotalSpent)
			//	.ThenBy(u => u.username)
			//	.ToList();
			//
			//xmlSerializer.Serialize(sw, users.ToArray(), namespaces);
			//
			//return sb.ToString().TrimEnd();
		}
	}
}