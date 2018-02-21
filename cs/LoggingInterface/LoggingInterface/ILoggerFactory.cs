using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace LoggingInterface
{
    static class ILoggerFactory
    {
        private static ILogger myLogger;

        public static ILogger GetLogger()
        {
            if(myLogger == null)
            {
                string logType = ConfigurationManager.AppSettings["logtype"];

                if (logType == "C")
                {
                    myLogger = new ConsoleLogger();
                }
                else if (logType == "F")
                {
                    myLogger = new FileLogger();
                }
            }

            return myLogger;
        }
    }
}
