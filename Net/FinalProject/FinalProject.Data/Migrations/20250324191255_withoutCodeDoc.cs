using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FinalProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class withoutCodeDoc : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CodeD",
                table: "scheduleList");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CodeD",
                table: "scheduleList",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
