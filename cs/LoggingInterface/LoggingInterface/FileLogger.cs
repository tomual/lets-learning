﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace LoggingInterface
{
    class FileLogger : ILogger
    {
        public void WriteToLog(string message)
        {
            var writer = File.AppendText("log.txt");
            writer.WriteLine(message);
            writer.Close();
        }
    }
}
