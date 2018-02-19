using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld.UI
{
    class CoinFlip
    {

        public void flipCoin()
        {
            int coin;
            string coinLabel;
            string guess;
            Random random = new Random();

            Console.Write("Heads (h) or tails (t)?: ");
            guess = Console.ReadLine();
            coin = random.Next(0, 2);
            coinLabel = coin == 0 ? "Heads" : "Tails";

            if ((coin == 0 && guess == "h") || (coin == 1 && guess == "t"))
            {
                Console.WriteLine("{0}, you guessed correctly", coinLabel);
            }
            else
            {
                Console.Write("{0}, you guessed incorrectly", coinLabel);
            }

            Console.ReadLine();
        }
    }
}
