using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FinalProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class good : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DoctorCode",
                table: "turnList");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DoctorCode",
                table: "turnList",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
