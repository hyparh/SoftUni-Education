namespace VaporStore.DataProcessor.Dto.Export
{
    public class GameExportJsonDto
    {
        public int Id { get; set; }
        public string Genre { get; set; }
        public GameExJsonDto[] Games { get; set; }
        public int TotalPlayers { get; set; }
    }
}
