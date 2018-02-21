using GameInventory.containers;
using GameInventory.items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameInventory
{
    class Program
    {
        static void Main(string[] args)
        {
            TestSack();
            Console.ReadLine();
        }

        private static void TestBag()
        {
            Bag myBag = new Bag(3);

            var item1 = new Sword();
            var item2 = new Potion();

            myBag.AddItem(item1);
            myBag.AddItem(item2);

            myBag.DisplayContents();
        }

        private static void TestSack()
        {
            Sack mySack = new Sack(4);

            var item1 = new Sword();
            var item2 = new Potion();

            mySack.AddItem(item1);
            mySack.AddItem(item2);

            mySack.DisplayContents();
        }
    }
}
