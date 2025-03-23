using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FinalProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class try6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CodeD",
                table: "scheduleList",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ScheduleId",
                table: "doctorList",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_doctorList_ScheduleId",
                table: "doctorList",
                column: "ScheduleId");

            migrationBuilder.AddForeignKey(
                name: "FK_doctorList_scheduleList_ScheduleId",
                table: "doctorList",
                column: "ScheduleId",
                principalTable: "scheduleList",
                principalColumn: "ScheduleId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_doctorList_scheduleList_ScheduleId",
                table: "doctorList");

            migrationBuilder.DropIndex(
                name: "IX_doctorList_ScheduleId",
                table: "doctorList");

            migrationBuilder.DropColumn(
                name: "CodeD",
                table: "scheduleList");

            migrationBuilder.DropColumn(
                name: "ScheduleId",
                table: "doctorList");
        }
    }
}
