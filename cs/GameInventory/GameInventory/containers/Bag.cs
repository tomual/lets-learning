using GameInventory.items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GameInventory.containers
{
    class Bag : Item
    {
        protected int capacity;
        protected int currentIndex;
        protected Item[] itemsInBag;

        public Bag(int capacity)
        {
            Name = "Small Brown Bag";
            Weight = 2;

            itemsInBag = new Item[capacity];
            this.capacity = capacity;
        }

        public virtual void AddItem(Item itemToAdd)
        {
            if(currentIndex >= capacity)
            {
                Console.WriteLine("Bag is full");
            }
            else
            {
                itemsInBag[currentIndex] = itemToAdd;
                currentIndex++;
            }
        }

        public virtual Item RemoveItem()
        {
            if(currentIndex == 0)
            {
                Console.WriteLine("Bag is empty");
                return null;
            }
            else
            {                
                Item itemToReturn = itemsInBag[currentIndex-1];

                itemsInBag[currentIndex-1] = null;
                currentIndex--;

                return itemToReturn;
            }
        }

        public virtual void DisplayContents()
        {
            Console.WriteLine("Items in bag:" );
            foreach (var item in itemsInBag)
            {
                if(item != null)
                {
                    Console.WriteLine(item.Name);
                }
            }
        }
    }
}
