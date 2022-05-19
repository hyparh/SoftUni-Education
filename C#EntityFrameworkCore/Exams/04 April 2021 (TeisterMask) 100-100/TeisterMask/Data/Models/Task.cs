﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TeisterMask.Data.Common;
using TeisterMask.Data.Models.Enums;

namespace TeisterMask.Data.Models
{
    public class Task
    {
        public Task()
        {
            EmployeesTasks = new HashSet<EmployeeTask>();
        }

        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(GlobalConstants.TASK_NAME_MAX_LENGTH)]
        public string Name { get; set; }
        
        public DateTime OpenDate { get; set; }
        
        public DateTime DueDate { get; set; }
       
        public ExecutionType ExecutionType { get; set; }
        
        public LabelType LabelType { get; set; }

        
        [ForeignKey(nameof(Project))]
        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }
        
        public virtual ICollection<EmployeeTask> EmployeesTasks { get; set; }
    }
}
