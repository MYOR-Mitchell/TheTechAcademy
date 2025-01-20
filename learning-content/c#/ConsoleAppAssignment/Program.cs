using System;

namespace ConsoleAppAssignment
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] stringArray = { "This", "is", "my", "array" };

            Console.WriteLine("Enter some text, please: ");
            string input = Console.ReadLine();

            for (int i = 0; i < stringArray.Length; i++)
            {
                stringArray[i] += " " + input;
            }

            for (int j = 0; j < stringArray.Length; j++)
            {
                Console.WriteLine(stringArray[j]);
            }


            //This is an infinite loop.
            //while (true)  
            //{
            //    if (stringArray.Length > 10)
            //    {
            //        Console.WriteLine("Theres 10 elements in that array.");
            //    }
            //    else if (stringArray.Length < 10)
            //    {
            //        Console.WriteLine("There's not 10 elements in that array.");
            //    }
            //    else
            //    {
            //        Console.WriteLine("How'd I get here?");
            //    }
            //}

            //This is an infinite loop fixed.  It needed an exit to the loop. 
            while (true)
            {
                if (stringArray.Length > 10)
                {
                    Console.WriteLine("Theres 10 elements in that array.");
                    break;
                }
                else if (stringArray.Length <= 10)
                {
                    Console.WriteLine("There's not 10 elements in that array.");
                    break;
                }
                else
                {
                    Console.WriteLine("How'd I get here?");
                    break;
                }
            }


            //Section two of the assignment assignment
            List<string> identical = new List<string> { "One", "Two", "Three", "Three", "Four", "Five" };




            Console.ReadKey();
        }
    }
}
