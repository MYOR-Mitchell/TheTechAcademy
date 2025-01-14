using Daily_Report_Assignment.Models;

namespace Daily_Report_Assignment.Display
{
    public class Result : IResult
    {
        public void DisplayReport(StudentDailyReport report)
        {
            Console.WriteLine("Student Daily Report" + Environment.NewLine);
            Console.WriteLine($"Name: {report.StudentName}");
            Console.WriteLine($"Course: {report.CurrentCourse}");
            Console.WriteLine($"Page: {report.CurrentPage}");
            Console.WriteLine($"Needs Help: {(report.NeedsHelp ? "yes" : "no")}");
            Console.WriteLine($"Positive Experiences: {report.PositiveExperiences}");
            Console.WriteLine($"Other Feedback: {report.OtherFeedback}");
            Console.WriteLine($"Hours Studied: {report.HoursStudied}");
        }
    }
}

