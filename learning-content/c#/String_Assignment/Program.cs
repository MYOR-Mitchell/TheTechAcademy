using System; // Required for basic console and system operations
using System.Text; // Required for StringBuilder

namespace String_Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            string start = "You are ";
            string middle = "the middle ";
            string last = "if the sentence!";

            StringBuilder sb = new StringBuilder();

            sb.Append(start);
            sb.Append(middle.ToUpper());
            sb.Append(last);
            Console.WriteLine(sb.ToString());

            Console.ReadKey();
        }
    }
}