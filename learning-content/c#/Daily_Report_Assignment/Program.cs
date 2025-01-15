using Microsoft.Extensions.DependencyInjection;
using Daily_Report_Assignment.Parsers;
using Daily_Report_Assignment.Models;
using Daily_Report_Assignment.UI;
using Daily_Report_Assignment.Display;

namespace Daily_Report_Assignment
{
    class Program
    {
        static void Main(string[] args)
        {
            var serviceProvider = ConfigureServices();

            var userInterface = serviceProvider.GetService<UserInterface>();
            userInterface.CollectAndDisplayStudentData();
        }

        private static IServiceProvider ConfigureServices()
        {
            var services = new ServiceCollection();

            services.AddSingleton<IParser, Parser>();
            services.AddSingleton<StudentDailyReportFactory>();
            services.AddSingleton<UserInterface>();

            return services.BuildServiceProvider();
        }
    }
}

