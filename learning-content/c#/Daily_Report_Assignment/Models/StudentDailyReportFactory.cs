namespace Daily_Report_Assignment.Models
{
    public class StudentDailyReportFactory
    {
        public StudentDailyReport Create(string studentName, string currentCourse, int currentPage, bool needsHelp, string positiveExperiences, string otherFeedback, double hoursStudied)
        {
            return new StudentDailyReport
            {
                StudentName = studentName,
                CurrentCourse = currentCourse,
                CurrentPage = currentPage,
                NeedsHelp = needsHelp,
                PositiveExperiences = positiveExperiences,
                OtherFeedback = otherFeedback,
                HoursStudied = hoursStudied
            };
        }
    }
}
