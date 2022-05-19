namespace TeisterMask.DataProcessor
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
    using TeisterMask.Data.Models;
    using TeisterMask.Data.Models.Enums;
    using TeisterMask.DataProcessor.ImportDto;

    public class Deserializer
    {
        private const string ErrorMessage = "Invalid data!";

        private const string SuccessfullyImportedProject
            = "Successfully imported project - {0} with {1} tasks.";

        private const string SuccessfullyImportedEmployee
            = "Successfully imported employee - {0} with {1} tasks.";

        public static string ImportProjects(TeisterMaskContext context, string xmlString)
        {
            var sb = new StringBuilder();

            var xmlRoot = new XmlRootAttribute("Projects");
            var xmlSerializer = new XmlSerializer(typeof(ImportProjectDto[]), xmlRoot);

            using StringReader sr = new StringReader(xmlString);
            var projectDtos = (ImportProjectDto[])xmlSerializer.Deserialize(sr);

            //ImportProjects validation
            //--------------------------
            var projects = new HashSet<Project>();

            foreach (var projectDto in projectDtos)
            {
                if (!IsValid(projectDto)) //check if every element of projectDtos is valid
                {
                    sb.AppendLine(ErrorMessage);
                    continue;
                }

                bool isOpenDateValid = DateTime.TryParseExact(projectDto.OpenDate, "dd/MM/yyyy",
                    CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime openDate);

                if (!isOpenDateValid)
                {
                    sb.AppendLine(ErrorMessage);
                    continue;
                }                

                bool isDueDateValid = DateTime.TryParseExact(projectDto.OpenDate, "dd/MM/yyyy",
                    CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime dueDate);

                if (!isDueDateValid)
                {
                    sb.AppendLine("Invalid data!");
                    continue;
                }

                var dbProject = new Project() //after validation we have to create the object with those props
                {
                    Name = projectDto.Name,
                    OpenDate = openDate,
                    DueDate = dueDate
                };

                projects.Add(dbProject);

                //Tasks validation
                //------------------
                var projectTasks = new HashSet<Task>();

                foreach (var taskDto in projectDto.Tasks)
                {
                    if (!IsValid(taskDto))
                    {
                        sb.AppendLine(ErrorMessage);
                        continue;
                    }

                    bool isTaskOpenDateValid = DateTime.TryParseExact(taskDto.TaskOpenDate, "dd/MM/yyyy",
                        CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime taskOpenDate);

                    if (!isTaskOpenDateValid)
                    {
                        sb.AppendLine(ErrorMessage);
                        continue;
                    }

                    bool isTaskDueDateValid = DateTime.TryParseExact(taskDto.TaskDueDate, "dd/MM/yyyy",
                        CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime taskDueDate);

                    if (!isTaskDueDateValid)
                    {
                        sb.AppendLine(ErrorMessage);
                        continue;
                    }

                    if (taskOpenDate < dbProject.OpenDate)
                    {
                        sb.AppendLine(ErrorMessage);
                        continue;
                    }

                    if (dbProject.DueDate.HasValue && taskDueDate > dbProject.DueDate)
                    {
                        sb.AppendLine(ErrorMessage);
                        continue;
                    }

                    var dbTask = new Task() 
                    {
                        Name = taskDto.Name,
                        OpenDate = taskOpenDate,
                        DueDate = taskDueDate,
                        ExecutionType = (ExecutionType)taskDto.ExecutionType,
                        LabelType = (LabelType)taskDto.LabelType,                        
                    };

                    projectTasks.Add(dbTask);
                }

                dbProject.Tasks = projectTasks;

                sb.AppendLine(string.Format(SuccessfullyImportedProject, dbProject.Name, projectTasks.Count));
            }

            context.Projects.AddRange(projects);
            context.SaveChanges();

            return sb.ToString().TrimEnd();
        }

        public static string ImportEmployees(TeisterMaskContext context, string jsonString)
        {
            var sb = new StringBuilder();

            ImportEmployeeDto[] employeeDtos = JsonConvert.DeserializeObject<ImportEmployeeDto[]>(jsonString);

            var validEmployees = new HashSet<Employee>();

            foreach (var employeeDto in employeeDtos)
            {
                if (!IsValid(employeeDto))
                {
                    sb.AppendLine(ErrorMessage);
                    continue;
                }

                var e = new Employee() 
                {
                    Username = employeeDto.Username,
                    Email = employeeDto.Email,
                    Phone = employeeDto.Phone
                };

                var employeeTasks = new HashSet<EmployeeTask>();

                foreach (var taskId in employeeDto.Tasks.Distinct())
                {
                    var task = context.Tasks
                        .Find(taskId);

                    if (task is null)
                    {
                        sb.AppendLine(ErrorMessage);
                        continue;
                    }

                    var employeeTask = new EmployeeTask() 
                    {
                        Employee = e,
                        TaskId = taskId
                    };

                    employeeTasks.Add(employeeTask);
                }

                e.EmployeesTasks = employeeTasks;
                validEmployees.Add(e);

                sb.AppendLine(string.Format(SuccessfullyImportedEmployee, e.Username, employeeTasks.Count));
            }

            context.Employees.AddRange(validEmployees);
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