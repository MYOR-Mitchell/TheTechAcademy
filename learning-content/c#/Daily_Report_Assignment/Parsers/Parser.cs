namespace Daily_Report_Assignment.Parsers
{
    public class Parser : IParser
    {
        public int ParseInt(string input)
        {
            while (true)
            {
                if (int.TryParse(input, out var result))
                {
                    return result;
                }

                Console.Write("Invalid input. Please enter a valid number: ");
                input = Console.ReadLine();
            }
        }

        public double ParseDouble(string input)
        {
            while (true)
            {
                if (double.TryParse(input, out var result))
                {
                    return result;
                }

                Console.Write("Invalid input. Please enter a valid number: ");
                input = Console.ReadLine();
            }
        }

        public bool ParseBool(string input)
        {
            while (true)
            {
                input = input.Trim().ToLower();

                if (input == "yes") { return true; }
                if (input == "no") { return false; }

                Console.Write("Invalid input. Please enter 'yes' or 'no': ");
                input = Console.ReadLine();
            }
        }
    }
}