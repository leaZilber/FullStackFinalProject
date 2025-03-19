using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FinalProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class createDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "scheduleList",
                columns: table => new
                {
                    ScheduleId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_scheduleList", x => x.ScheduleId);
                });

            migrationBuilder.CreateTable(
                name: "userList",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserEncryptedPassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserRole = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserCreateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserUpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Discriminator = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    DoctorCode = table.Column<int>(type: "int", nullable: true),
                    FieldOfSpecialization = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LicenseNumber = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userList", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "messagesList",
                columns: table => new
                {
                    MessageId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SenderId = table.Column<int>(type: "int", nullable: false),
                    ReceiverId = table.Column<int>(type: "int", nullable: false),
                    MessageContent = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MessageDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_messagesList", x => x.MessageId);
                    table.ForeignKey(
                        name: "FK_messagesList_userList_UserId",
                        column: x => x.UserId,
                        principalTable: "userList",
                        principalColumn: "UserId");
                });

            migrationBuilder.CreateTable(
                name: "testResaultList",
                columns: table => new
                {
                    TestId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TestDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PatientId = table.Column<int>(type: "int", nullable: false),
                    Summary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_testResaultList", x => x.TestId);
                    table.ForeignKey(
                        name: "FK_testResaultList_userList_UserId",
                        column: x => x.UserId,
                        principalTable: "userList",
                        principalColumn: "UserId");
                });

            migrationBuilder.CreateTable(
                name: "turnList",
                columns: table => new
                {
                    TurnId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TurnUserId = table.Column<int>(type: "int", nullable: false),
                    DoctorName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DoctorCode = table.Column<int>(type: "int", nullable: false),
                    DateTurn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TurnLocate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Hour = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ArrivalConfirmation = table.Column<bool>(type: "bit", nullable: false),
                    ScheduleId = table.Column<int>(type: "int", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_turnList", x => x.TurnId);
                    table.ForeignKey(
                        name: "FK_turnList_scheduleList_ScheduleId",
                        column: x => x.ScheduleId,
                        principalTable: "scheduleList",
                        principalColumn: "ScheduleId");
                    table.ForeignKey(
                        name: "FK_turnList_userList_UserId",
                        column: x => x.UserId,
                        principalTable: "userList",
                        principalColumn: "UserId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_messagesList_UserId",
                table: "messagesList",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_testResaultList_UserId",
                table: "testResaultList",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_turnList_ScheduleId",
                table: "turnList",
                column: "ScheduleId");

            migrationBuilder.CreateIndex(
                name: "IX_turnList_UserId",
                table: "turnList",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "messagesList");

            migrationBuilder.DropTable(
                name: "testResaultList");

            migrationBuilder.DropTable(
                name: "turnList");

            migrationBuilder.DropTable(
                name: "scheduleList");

            migrationBuilder.DropTable(
                name: "userList");
        }
    }
}
