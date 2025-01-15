using Daily_Report_Assignment.Models;
using Daily_Report_Assignment.Parsers;
using Daily_Report_Assignment.Display;

namespace Daily_Report_Assignment.UI
{
    public class UserInterface
    {
        private readonly IParser _parser;
        private readonly StudentDailyReportFactory _factory;

        public UserInterface(IParser parser, StudentDailyReportFactory factory)
        {
            _parser = parser;
            _factory = factory;
        }

        public void CollectAndDisplayStudentData()
        {
            string studentName = GetValidatedInput("What is your name?: ");

            string currentCourse = GetValidatedInput("What course are you on?: ");

            Console.Write("What page number?: ");
            int currentPage = _parser.ParseInt(Console.ReadLine());

            Console.Write("Do you need help (yes/no)?: ");
            bool needsHelp = _parser.ParseBool(Console.ReadLine());

            string positiveExperiences = GetValidatedInput("Were there any positive experiences you’d like to share? Please give specifics.: ");

            string otherFeedback = GetValidatedInput("Is there any other feedback you’d like to provide? Please be specific.: ");

            Console.Write("How many hours did you study?: ");
            double hoursStudied = _parser.ParseDouble(Console.ReadLine());

            Console.Clear();

            GetResult(studentName, currentCourse, currentPage, needsHelp, positiveExperiences,otherFeedback,hoursStudied).DisplayReport();
        }

        private string GetValidatedInput(string prompt)
        {
            string input;

            do
            {
                Console.Write(prompt);
                input = Console.ReadLine();
            } while (string.IsNullOrWhiteSpace(input));

            return input;
        }
         
        public IResult GetResult(
            string studentName, 
            string currentCourse, 
            int currentPage,
            bool needsHelp,
            string positiveExperiences,
            string otherFeedback, 
            double hoursStudied)
        {
            StudentDailyReport report = _factory.Create(studentName, currentCourse, currentPage, needsHelp, positiveExperiences, otherFeedback, hoursStudied);

            return report;
        }
    }
}
