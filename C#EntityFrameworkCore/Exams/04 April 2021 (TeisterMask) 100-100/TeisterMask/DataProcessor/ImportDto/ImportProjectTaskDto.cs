using System.ComponentModel.DataAnnotations;
using System.Xml.Serialization;
using TeisterMask.Data.Common;

namespace TeisterMask.DataProcessor.ImportDto
{
    [XmlType("Task")]
    public class ImportProjectTaskDto
    {
        [XmlElement("Name")]
        [Required]
        [MinLength(GlobalConstants.TASK_NAME_MIN_LENGTH)]
        [MaxLength(GlobalConstants.TASK_NAME_MAX_LENGTH)]
        public string Name { get; set; }

        [Required]
        [XmlElement("OpenDate")]
        public string TaskOpenDate { get; set; }

        [Required]
        [XmlElement("DueDate")]
        public string TaskDueDate { get; set; }

        [XmlElement("ExecutionType")]
        [Range(GlobalConstants.TASK_EXEC_TYPE_MIN_VALUE,
            GlobalConstants.TASK_EXEC_TYPE_MAX_VALUE)]
        public int ExecutionType { get; set; }

        [XmlElement("LabelType")]
        [Range(GlobalConstants.LABEL_TYPE_TYPE_MIN_VALUE,
            GlobalConstants.LABEL_TYPE_TYPE_MAX_VALUE)]
        public int LabelType { get; set; }
    }
}
