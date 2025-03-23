using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FinalProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class try7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_turnList_scheduleList_ScheduleId",
                table: "turnList");

            migrationBuilder.AlterColumn<int>(
                name: "ScheduleId",
                table: "turnList",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_turnList_scheduleList_ScheduleId",
                table: "turnList",
                column: "ScheduleId",
                principalTable: "scheduleList",
                principalColumn: "ScheduleId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_turnList_scheduleList_ScheduleId",
                table: "turnList");

            migrationBuilder.AlterColumn<int>(
                name: "ScheduleId",
                table: "turnList",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_turnList_scheduleList_ScheduleId",
                table: "turnList",
                column: "ScheduleId",
                principalTable: "scheduleList",
                principalColumn: "ScheduleId");
        }
    }
}
