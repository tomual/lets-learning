using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld.UI
{
    class Program
    {
        static void Main(string[] args)
        {
            Hangman hangman = new Hangman();
            hangman.Play();

            //RockPaperScissors rps = new RockPaperScissors();
            //rps.play();

            //Rectangle rectangle = new Rectangle(5, 7);
            //Console.WriteLine(rectangle.getArea());
            //Console.ReadLine();


            //Console.WriteLine("Enter to start time");
            //Console.ReadLine();

            //StopWatch stopWatch = new StopWatch();
            //stopWatch.start();

            //Console.WriteLine("Enter to stop time");
            //Console.ReadLine();
            //stopWatch.stop();

            //Console.ReadLine();

            // askName(args);
            // askAddition();
            // prettyPrint();
            // guessGame();
            // luckySeven();
            // multiplicationTable();
            // CoinFlip coinFlip = new CoinFlip();
            // coinFlip.flipCoin();
        }

        private static void multiplicationTable()
        {
            for (int i = 1; i < 10; i++)
            {
                Console.Write("\t{0}", i);
            }
            Console.WriteLine();
            for (int i = 1; i < 10; i++)
            {
                Console.Write("\t-");
            }
            Console.WriteLine();

            for (int i = 1; i < 10; i++)
            {
                Console.Write(i + " | ");
                for (int j = 1; j < 10; j++)
                {
                    Console.Write("\t{0}", i * j);
                }
                Console.WriteLine();
            }
            Console.ReadLine();
        }

        private static void luckySeven()
        {
            int matches = 0;
            Random random = new Random();
            int die1;
            int die2;

            for (int i = 0; i < 100; i++)
            {
                die1 = random.Next(1, 7);
                die2 = random.Next(1, 7);

                Console.Write("Rolled {0} and {1}", die1, die2);

                if(die1 == die2)
                {
                    Console.Write(", matches");
                    matches++;
                }

                Console.WriteLine();
            }
            Console.WriteLine("{0} / 100 rolls matched", matches);
            Console.ReadLine();
        }

        private static void guessGame()
        {
            int guess;
            int guesses = 0;
            string input;
            bool correct = false;
            int answer;

            Random random = new Random();
            answer = random.Next(1, 11);

            do
            {
                Console.Write("Enter guess (1 to 10): ");
                input = Console.ReadLine();
                guess = int.Parse(input);

                if(guess < 1 || guess > 10)
                {
                    Console.WriteLine("Guess must be between 1 to 10.");
                    continue;
                }

                guesses++;

                if (guess == answer)
                {
                    correct = true;
                }
                else
                {
                    if(answer > guess)
                    {
                        Console.WriteLine("Higher");
                    }
                    else
                    {
                        Console.WriteLine("Lower");
                    }
                }
            } while (!correct);
            Console.WriteLine("Correct, the number is {0}. You guessed {1} times.", answer, guesses);
            Console.ReadLine();
        }
        
        private static void prettyPrint()
        {
            string rightFormat = "{0,-15} {1,9:C}";
            Console.WriteLine(rightFormat, "A1-2345676", 5302.32);
            Console.WriteLine(rightFormat, "F1-235676", 22.10);
            Console.WriteLine(rightFormat, "T1-99282", 21400000000.10);
            Console.WriteLine("d9 format: {0:d9}", 12345);
            Console.WriteLine("f3 format: {0:f3}", 12345);
            Console.WriteLine("n  format: {0:n}", 12345);

            string burgerName = string.Format("String is {0,50}", "Cheeseburger");
            Console.WriteLine(burgerName);
            Console.ReadLine();
        }

        private static void askAddition()
        {
            Console.WriteLine("Enter first number:");
            string userInput = Console.ReadLine();
            int number1 = int.Parse(userInput);
            Console.WriteLine("Enter second number:");
            userInput = Console.ReadLine();
            int number2 = int.Parse(userInput);
            int sum = number1 + number2;
            Console.WriteLine("The sum is {0}", sum);
            Console.ReadLine();
        }

        static void askName(string[] args)
        {
            Console.WriteLine("Enter word");
            string name;
            name = Console.ReadLine();
            Console.WriteLine("You entered the word " + name);
            Console.ReadLine();
        }
    }
}
