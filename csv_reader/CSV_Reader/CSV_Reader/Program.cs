using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace CSV_Reader
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting CSV Reader...");

            StreamReader reader = null;
            var basePath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            var fileName = basePath + "/MOCK_DATA.csv";
            List<string> rawData = new List<string>();
            Dictionary<Guid, Entity> processingDict = new Dictionary<Guid, Entity>();

            if (File.Exists(fileName))
            {
                // read header cols first!
                reader = new StreamReader(File.OpenRead(fileName));
                reader.ReadLine();

                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();
                    rawData.Add(line);
                }
            }

            var parsedData = Entity.Convert(rawData.ToArray());

            parsedData.ToList().ForEach(d =>
            {
                if (processingDict.ContainsKey(d.UserId))
                {
                    var temp = processingDict[d.UserId];

                    if (d.Version > temp.Version)
                    {
                        processingDict[d.UserId] = d;
                    }
                }
                else
                {
                    processingDict.Add(d.UserId, d);
                }
            });

            var processedData = processingDict.Values.ToArray();
            Array.Sort(processedData, new EntityComparer());

            // Write to file or store in DB.
            var groupedProcessedData = processedData.GroupBy(d => d.InsuranceCompany);
            

        }
    }
}
