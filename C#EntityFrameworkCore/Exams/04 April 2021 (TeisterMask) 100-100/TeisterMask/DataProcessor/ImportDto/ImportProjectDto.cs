using System.ComponentModel.DataAnnotations;
using System.Xml.Serialization;
using TeisterMask.Data.Common;

namespace TeisterMask.DataProcessor.ImportDto
{
    [XmlType("Project")]
    public class ImportProjectDto
    {        
        [XmlElement("Name")]
        [Required]
        [MinLength(GlobalConstants.PROJECT_NAME_MIN_LENGTH)]
        [MaxLength(GlobalConstants.PROJECT_NAME_MAX_LENGTH)]
        public string Name { get; set; }

        [XmlElement("OpenDate")]
        [Required]
        public string OpenDate { get; set; }

        [XmlElement("DueDate")]
        public string DueDate { get; set; }

        [XmlArray("Tasks")]
        public ImportProjectTaskDto[] Tasks { get; set; }
    }
}
