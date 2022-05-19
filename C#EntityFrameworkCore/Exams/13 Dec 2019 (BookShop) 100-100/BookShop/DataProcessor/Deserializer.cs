namespace BookShop.DataProcessor
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Globalization;
    using System.IO;
    using System.Linq;
    using System.Text;
    using System.Xml.Serialization;
    using BookShop.Data.Models;
    using BookShop.Data.Models.Enums;
    using BookShop.DataProcessor.ImportDto;
    using Data;
    using Newtonsoft.Json;
    using ValidationContext = System.ComponentModel.DataAnnotations.ValidationContext;

    public class Deserializer
    {
        private const string ErrorMessage = "Invalid data!";

        private const string SuccessfullyImportedBook
            = "Successfully imported book {0} for {1:F2}.";

        private const string SuccessfullyImportedAuthor
            = "Successfully imported author - {0} with {1} books.";

        public static string ImportBooks(BookShopContext context, string xmlString)
        {
            var sb = new StringBuilder();

            var xmlRoot = new XmlRootAttribute("Books");
            var xmlSerializer = new XmlSerializer(typeof(BookXmlImportDto[]), xmlRoot);
                     
            var bookDtos = (BookXmlImportDto[])xmlSerializer.Deserialize(new StringReader(xmlString));

            var books = new List<Book>();

            foreach (var xmlBook in bookDtos)
            {
                if (!IsValid(xmlBook))
                {
                    sb.AppendLine("Invalid data!");
                    continue;
                }

                bool parsedDate = DateTime.TryParseExact(xmlBook.PublishedOn, "MM/dd/yyyy",
                    CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime publishedOn);

                if (!parsedDate)
                {
                    sb.AppendLine("Invalid data!");
                    continue;
                }

                var book = new Book
                {
                    Name = xmlBook.Name,
                    Genre = (Genre)xmlBook.Genre,
                    Price = xmlBook.Price,
                    Pages = xmlBook.Pages,
                    PublishedOn = publishedOn
                };

                books.Add(book);
                sb.AppendLine($"Successfully imported book {xmlBook.Name} for {xmlBook.Price:F2}.");
            }

            context.Books.AddRange(books);
            context.SaveChanges();

            return sb.ToString().TrimEnd();            
        }

        public static string ImportAuthors(BookShopContext context, string jsonString)
        {
            var sb = new StringBuilder();
            
            var authorDtos = JsonConvert.DeserializeObject<AuthorJsonImportDto[]>(jsonString);
            
            var authors = new HashSet<Author>();            

            foreach (var authorDto in authorDtos)
            {
                if (!IsValid(authorDto))
                {
                    sb.AppendLine("Invalid data!");
                    continue;
                }

               
                var doesEmailExists = authors
                    .FirstOrDefault(x => x.Email == authorDto.Email);

                if (doesEmailExists != null)
                {
                    sb.AppendLine(ErrorMessage);
                    continue;
                }

                var dbAuthor = new Author
                {
                    FirstName = authorDto.FirstName,
                    LastName = authorDto.LastName,
                    Phone = authorDto.Phone,
                    Email = authorDto.Email,
                };

                var uniqueBookId = authorDto.Books
                    .Distinct(); //take only the unique Id's of Books

                foreach (var authorDtoAuthorBookDto in uniqueBookId)
                {
                    var dbBook = context.Books
                        .Find(authorDtoAuthorBookDto.Id);

                    if (dbBook is null)
                    {
                        continue;
                    }
                    
                    dbAuthor.AuthorsBooks.Add(new AuthorBook
                    {
                        Author = dbAuthor,
                        Book = dbBook
                    });
                }

                if (dbAuthor.AuthorsBooks.Count is 0)
                {
                    sb.AppendLine("Invalid data!");
                    continue;
                }

                authors.Add(dbAuthor);

                sb.AppendLine($"Successfully imported author - {dbAuthor.FirstName + " " + dbAuthor.LastName} with {dbAuthor.AuthorsBooks.Count} books.");
            }
            
            context.Authors.AddRange(authors);
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