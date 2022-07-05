using System;
using System.Collections;
using System.Linq;

namespace CSV_Reader
{
    public class Entity
    {
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public double Version { get; set; }
        public string InsuranceCompany { get; set; }

        public static Entity[] Convert(string[] input)
        {
            return input.Select(Convert).ToArray();
        }

        public static Entity Convert(string input)
        {
            var data = input.Split(',');
            Guid.TryParse(data[0], out var userId);
            var name = data[1];
            Double.TryParse(data[2], out var versionNum);
            var company = data[3];

            return new Entity
            {
                UserId = userId,
                Name = name,
                Version = versionNum,
                InsuranceCompany = company
            };
        }
    }
}
