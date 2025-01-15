using Daily_Report_Assignment.Display;

namespace Daily_Report_Assignment.Models
{
    public class StudentDailyReport : IResult
    {
        public string StudentName { get; set; }
        public string CurrentCourse { get; set; }
        public int CurrentPage { get; set; }
        public bool NeedsHelp { get; set; }
        public string PositiveExperiences { get; set; }
        public string OtherFeedback { get; set; }
        public double HoursStudied { get; set; }

        public void DisplayReport()
        {
            Console.WriteLine("Student Daily Report" + Environment.NewLine);
            Console.WriteLine($"Name: {this.StudentName}");
            Console.WriteLine($"Course: {this.CurrentCourse}");
            Console.WriteLine($"Page: {this.CurrentPage}");
            Console.WriteLine($"Needs Help: {(this.NeedsHelp ? "yes" : "no")}");
            Console.WriteLine($"Positive Experiences: {this.PositiveExperiences}");
            Console.WriteLine($"Other Feedback: {this.OtherFeedback}");
            Console.WriteLine($"Hours Studied: {this.HoursStudied}");
        }
    }
}