using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FinalProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class withOutExtends : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "userList");

            migrationBuilder.DropColumn(
                name: "DoctorCode",
                table: "userList");

            migrationBuilder.DropColumn(
                name: "FieldOfSpecialization",
                table: "userList");

            migrationBuilder.DropColumn(
                name: "LicenseNumber",
                table: "userList");

            migrationBuilder.CreateTable(
                name: "doctorList",
                columns: table => new
                {
                    DoctorCode = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FieldOfSpecialization = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LicenseNumber = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_doctorList", x => x.DoctorCode);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "doctorList");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "userList",
                type: "nvarchar(8)",
                maxLength: 8,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "DoctorCode",
                table: "userList",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FieldOfSpecialization",
                table: "userList",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LicenseNumber",
                table: "userList",
                type: "int",
                nullable: true);
        }
    }
}
