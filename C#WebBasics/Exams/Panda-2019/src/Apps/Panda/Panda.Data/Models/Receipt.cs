﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Panda.Data.Models
{
    public class Receipt
    {
        public Receipt()
        {
            Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }

        public decimal Fee { get; set; }

        public DateTime IssuedOn { get; set; }

        [Required]
        public string RecipientId { get; set; }
        public virtual User Recipient { get; set; }

        [Required]
        public string PackageId { get; set; }
        public virtual Package Package { get; set; }
    }
}
