namespace VaporStore.DataProcessor
{
	using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Globalization;
    using System.IO;
    using System.Linq;
    using System.Text;
    using System.Xml.Serialization;
    using Data;
    using Newtonsoft.Json;
    using VaporStore.Data.Models;
    using VaporStore.Data.Models.Enums;
    using VaporStore.DataProcessor.Dto.Import;

    public static class Deserializer
	{
		public static string ImportGames(VaporStoreDbContext context, string jsonString)
		{
			var sb = new StringBuilder();

			var gameDtos = JsonConvert.DeserializeObject<GameImportJsonDto[]>(jsonString);

			var games = new HashSet<Game>();
			var devs = new HashSet<Developer>();
			var genres = new HashSet<Genre>();
			var tags = new HashSet<Tag>();

            foreach (var gameDto in gameDtos)
            {
                if (!IsValid(gameDto))
                {
					sb.AppendLine("Invalid Data");
					continue;
                }

				bool isReleaseDateValid = DateTime.TryParseExact(gameDto.ReleaseDate, "yyyy-MM-dd",
					CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime releaseDate);

                if (!isReleaseDateValid)
                {
					sb.AppendLine("Invalid Data");
					continue;
				}

				//next we have to import data

				var dbGame = new Game 
				{
					Name = gameDto.Name,
					Price = gameDto.Price,
					ReleaseDate = releaseDate, //this one we take from "out DateTame releaseDate"
				};

				var dev = devs.FirstOrDefault(d => d.Name == gameDto.Developer); //check if developer exists

				if (dev is null)
				{
					dev = new Developer //makes new developer (it's other model)
					{ 
						Name = gameDto.Developer 
					}; 

					devs.Add(dev);
				}

				dbGame.Developer = dev;

				var genre = genres.FirstOrDefault(g => g.Name == gameDto.Genre); //check if genre exists

				if (genre is null)
				{
					genre = new Genre //makes new genre (it's other model)
					{ 
						Name = gameDto.Genre 
					}; 

					genres.Add(genre);
				}

				dbGame.Genre = genre;
				
				foreach (var tag in gameDto.Tags) //THIS ONE IS FOR THE ARRAY "public virtual string[] Tags { get; set; }" !!!
				{
					var dbTag = tags.FirstOrDefault(t => t.Name == tag);

                    if (dbTag is null)
                    {
						dbTag = new Tag //makes new tag (it's other model)
						{ 
							Name = tag 
						}; 

						tags.Add(dbTag);
                    }
					
					dbGame.GameTags.Add(new GameTag 
					{
						Tag = dbTag
					});
                }

				games.Add(dbGame);
				sb.AppendLine($"Added {gameDto.Name} ({gameDto.Genre}) with {gameDto.Tags.Length} tags");
			}

			context.Games.AddRange(games);
			context.SaveChanges();

			return sb.ToString().TrimEnd();
		}

		public static string ImportUsers(VaporStoreDbContext context, string jsonString)
		{
			var sb = new StringBuilder();

			var userDtos = JsonConvert.DeserializeObject<UserImportJsonDto[]>(jsonString);

			var users = new HashSet<User>();
			
			foreach (var userDto in userDtos)
			{
				bool hasInvalidCard = false;

				if (!IsValid(userDto))
				{
					sb.AppendLine("Invalid Data");
					continue;
				}

				var dbUser = new User
				{					
					Username = userDto.Username,
					FullName = userDto.FullName,
					Email = userDto.Email,
					Age = userDto.Age
				};

                foreach (var card in userDto.Cards)
                {
					var validTypes = new string[] { "Debit", "Credit" };

                    if (!IsValid(card) || validTypes.Any(t => t == card.Type) is false)
                    {
						hasInvalidCard = true;
						break;
                    }

					var dbCard = new Card 
					{ 
						Cvc = card.Cvc,
						Number = card.Number
					};

					dbCard.Type = Enum.Parse<CardType>(card.Type); //enum parsing

					dbUser.Cards.Add(dbCard);	
                }

                if (hasInvalidCard)
                {
					sb.AppendLine("Invalid Data");
					continue;
				}

				users.Add(dbUser);
				sb.AppendLine($"Imported {userDto.Username} with {userDto.Cards.Length} cards");
			}

			context.Users.AddRange(users);
			context.SaveChanges();

			return sb.ToString().TrimEnd();
		}

		public static string ImportPurchases(VaporStoreDbContext context, string xmlString)
		{
			var sb = new StringBuilder();

			var xmlRoot = new XmlRootAttribute("Purchases");
			var xmlSerializer = new XmlSerializer(typeof(PurchaseImportXmlDto[]), xmlRoot);

			using StringReader sr = new StringReader(xmlString);
			var purchaseDtos = (PurchaseImportXmlDto[])xmlSerializer.Deserialize(sr);

			var purchases = new HashSet<Purchase>();

			//var games = context.Games.ToList(); //those two are optional
			//var cards = context.Cards.ToList();

            foreach (var purchaseDto in purchaseDtos)
            {
                if (!IsValid(purchaseDto))
                {
					sb.AppendLine("Invalid Data");
					continue;
                }

				var dbPurchase = new Purchase
				{
					ProductKey = purchaseDto.Key,										
				};

				bool isDateValid = DateTime.TryParseExact(purchaseDto.Date, "dd/MM/yyyy HH:mm",
					CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime purchaseDate);

				if (!isDateValid)
                {
					sb.AppendLine("Invalid Data");
					continue;
				}

				dbPurchase.Date = purchaseDate;

				var isEnumValid = Enum.TryParse(typeof(PurchaseType), purchaseDto.Type, out object purchaseType);

				if (!isEnumValid)
                {
					sb.AppendLine("Invalid Data");

					continue;
				}

				dbPurchase.Type = (PurchaseType)purchaseType;

				var card = context.Cards.FirstOrDefault(c => c.Number == purchaseDto.Card);

                if (card is null)
                {
					sb.AppendLine("Invalid Data");
					continue;
				}

				dbPurchase.Card = card;

				var game = context.Games.FirstOrDefault(g => g.Name == purchaseDto.Title);

                if (game is null)
                {
					sb.AppendLine("Invalid Data");
					continue;
				}

				dbPurchase.Game = game;
				purchases.Add(dbPurchase);

				sb.AppendLine($"Imported {purchaseDto.Title} for {card.User.Username}");
            }

			context.Purchases.AddRange(purchases);
			context.SaveChanges();

			return sb.ToString().TrimEnd();
		}

		private static bool IsValid(object dto)
		{
			var validationContext = new ValidationContext(dto);
			var validationResult = new List<ValidationResult>();

			return Validator.TryValidateObject(dto, validationContext, validationResult, true);
		}
	}
}