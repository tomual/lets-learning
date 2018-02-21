using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoggingInterface
{
    class Program
    {
        static void Main(string[] args)
        {
            ILogger logger = ILoggerFactory.GetLogger();

            logger.WriteToLog("Testing Logger");
            Console.ReadLine();
        }
    }
}
