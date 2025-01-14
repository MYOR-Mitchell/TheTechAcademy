namespace Daily_Report_Assignment.Parsers
{
    public interface IParser
    {
        int ParseInt(string input);
        double ParseDouble(string input);
        bool ParseBool(string input);
    }

}