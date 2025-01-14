using Daily_Report_Assignment.Models;
using Daily_Report_Assignment.Parsers;
using Daily_Report_Assignment.Display;

namespace Daily_Report_Assignment.UI
{
    public class UserInterface
    {
        private readonly IParser _parser;
        private readonly IResult _result;
        private readonly StudentDailyReportFactory _factory;

        public UserInterface(IParser parser, IResult result, StudentDailyReportFactory factory)
        {
            _parser = parser;
            _result = result;
            _factory = factory;
        }

        public void CollectAndDisplayStudentData()
        {
            var studentName = GetValidatedInput("What is your name?: ");

            var currentCourse = GetValidatedInput("What course are you on?: ");

            Console.Write("What page number?: ");
            var currentPage = _parser.ParseInt(Console.ReadLine());

            Console.Write("Do you need help (yes/no)?: ");
            var needsHelp = _parser.ParseBool(Console.ReadLine());

            var positiveExperiences = GetValidatedInput("Were there any positive experiences you’d like to share? Please give specifics.: ");

            var otherFeedback = GetValidatedInput("Is there any other feedback you’d like to provide? Please be specific.: ");

            Console.Write("How many hours did you study?: ");
            var hoursStudied = _parser.ParseDouble(Console.ReadLine());

            var report = _factory.Create(studentName, currentCourse, currentPage, needsHelp, positiveExperiences, otherFeedback, hoursStudied);

            Console.Clear();

            _result.DisplayReport(report);
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
    }
}
