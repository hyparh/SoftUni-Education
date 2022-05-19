namespace BookShop.DataProcessor
{
    using System;
    using System.Globalization;
    using System.IO;
    using System.Linq;
    using System.Text;
    using System.Xml;
    using System.Xml.Serialization;
    using BookShop.Data.Models.Enums;
    using BookShop.DataProcessor.ExportDto;
    using Data;
    using Newtonsoft.Json;
    using Formatting = Newtonsoft.Json.Formatting;

    public class Serializer
    {
        public static string ExportMostCraziestAuthors(BookShopContext context)
        {
            var mostCraziestAuthos = context.Authors                
                .Select(n => new
                {
                    AuthorName = n.FirstName + " " + n.LastName,
                    Books = n.AuthorsBooks
                        .OrderByDescending(p => p.Book.Price)
                        .Select(b => new
                        {
                            BookName = b.Book.Name,
                            BookPrice = b.Book.Price.ToString("F2") //formatting price to the second digit after decimal point
                        })
                })
                .OrderByDescending(x => x.Books.Count())                
                .ToArray();

            return JsonConvert.SerializeObject(mostCraziestAuthos, Formatting.Indented);
        }

        public static string ExportOldestBooks(BookShopContext context, DateTime date)
        {
            var sb = new StringBuilder();

            var xmlRoot = new XmlRootAttribute("Books");
            var xmlSerializer = new XmlSerializer(typeof(BookXmlExportDto[]), xmlRoot);

            var namespaces = new XmlSerializerNamespaces();
            namespaces.Add(string.Empty, string.Empty);

            using StringWriter sw = new StringWriter(sb);
           
            var oldestBooks = context.Books
                .ToArray()
                .OrderByDescending(x => x.Pages)
                .ThenByDescending(x => x.PublishedOn)
                .Where(b => b.PublishedOn < date && b.Genre == Genre.Science)
                .Select(x => new BookXmlExportDto
                {
                    Name = x.Name,
                    Date = x.PublishedOn.ToString("d", CultureInfo.InvariantCulture),
                    Pages = x.Pages
                })
                .Take(10)
                .ToArray();

            xmlSerializer.Serialize(sw, oldestBooks, namespaces);

            return sb.ToString().TrimEnd();
        }
    }
}