using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld.UI
{
    class Rectangle
    {
        private int height;
        private int width;

        public Rectangle()
        {
            Console.WriteLine("Blank rectangle constructor");
        }

        public Rectangle(int width, int height)
        {
            this.height = height;
            this.width = width;
        }

        public int getArea()
        {
            return height * width;
        }
    }
}
