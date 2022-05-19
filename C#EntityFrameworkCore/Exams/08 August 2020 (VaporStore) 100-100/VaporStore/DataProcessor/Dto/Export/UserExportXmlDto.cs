using System.Xml.Serialization;

namespace VaporStore.DataProcessor.Dto.Export
{
    [XmlType("User")]
    public class UserExportXmlDto
    {
        [XmlAttribute("username")]
        public string Username { get; set; }
        
        [XmlElement("TotalSpent")]
        public decimal TotalSpent { get; set; }

        public ExportPurchaseXmlDto[] Purchases { get; set; }
    }  
} 

