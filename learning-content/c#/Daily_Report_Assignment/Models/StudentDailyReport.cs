namespace Daily_Report_Assignment.Models
{
    public class StudentDailyReport
    {
        public string StudentName { get; set; }
        public string CurrentCourse { get; set; }
        public int CurrentPage { get; set; }
        public bool NeedsHelp { get; set; }
        public string PositiveExperiences { get; set; }
        public string OtherFeedback { get; set; }
        public double HoursStudied { get; set; }
    }
}