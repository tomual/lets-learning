using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld.UI
{
    class RockPaperScissors
    {
        private Random random;
        private int wins;
        private int losses;
        private int ties;

        public RockPaperScissors()
        {
            random = new Random();
        }
        
        public void play()
        {
            string input;
            input = askInput();

            while(input != "q")
            {
                string aiChoice = getAiChoice();
                judge(input, aiChoice);
                printScore();
                Console.Clear();
                input = askInput();
            }
        }

        private void printScore()
        {
            Console.WriteLine();
            Console.WriteLine("w: {0}", wins);
            Console.WriteLine("l: {0}", losses);
            Console.WriteLine("t: {0}", ties);
            Console.WriteLine();
            Console.WriteLine("Press enter to continue");
            Console.ReadLine();
        }

        private void judge(string input, string aiChoice)
        {
            if(input == aiChoice)
            {
                ties++;
                Console.WriteLine("Both picked {0}, you tied", getChoiceLabel(input));
            }
            else if(input == "r" && aiChoice == "s" || input == "p" && aiChoice == "r" || input == "s" && aiChoice == "p")
            {
                wins++;
                Console.WriteLine("You picked {0} and computer picked {1}, you win", getChoiceLabel(input), getChoiceLabel(aiChoice));

            }
            else
            {
                losses++;
                Console.WriteLine("You picked {0} and computer picked {1}, you lose", getChoiceLabel(input), getChoiceLabel(aiChoice));
            }

        }
        
        private string getChoiceLabel(string choice)
        {
            switch (choice)
            {
                case "r":
                    return "rock";
                case "p":
                    return "paper";
                default:
                    return "scissors";
            }
        }

        private string getAiChoice()
        {
            int choice = random.Next(1, 4);
            switch (choice)
            {
                case 1:
                    return "r";
                case 2:
                    return "p";
                default:
                    return "s";
            }
        }

        private string askInput()
        {
            while(true)
            {
                Console.WriteLine("Enter 'r' 'p' 's' to play or 'q' to quit");
                string input = Console.ReadLine();

                if (input == "r" || input == "p" || input == "s" || input == "q")
                {
                    return input;
                }
                else
                {
                    Console.WriteLine("Invalid input");
                }
            }            
        }
    }
}
