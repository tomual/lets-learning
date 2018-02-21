using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GameInventory.items;

namespace GameInventory.containers
{
    class Sack : Bag
    {
        public Sack(int capacity) : base(capacity)
        {

        }

        public override void AddItem(Item itemToAdd)
        {
            if(itemToAdd.Weight > 1)
            {
                Console.WriteLine("Item too heavy for bag");
            }
            else
            {
                base.AddItem(itemToAdd);
            }
        }
    }
}
