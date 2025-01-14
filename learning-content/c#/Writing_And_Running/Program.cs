using System;

class Program
{
    static void Main(string[] args)
    {
        //Console.WriteLine("Welcome to Acme Accounting Systems");
        //Console.WriteLine(@"Remember, we're ""accounting"" on you!");  //OR this way... Console.WriteLine("Remember, we're \"accounting\" on you!");
        //Console.ReadKey();

        Console.WriteLine("What is your favorite number?");
        string favoriteNumber = Console.ReadLine();
        int favNum = Convert.ToInt32(favoriteNumber);
        int total = favNum + 5;
        Console.WriteLine("Your favorite number plus 5 is: " + total);
        Console.ReadLine();
    }
}
