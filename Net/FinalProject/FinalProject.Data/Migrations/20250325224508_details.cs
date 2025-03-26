using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FinalProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class details : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserUpdateDate",
                table: "userList");

            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "testResaultList");

            migrationBuilder.RenameColumn(
                name: "DoctorCode",
                table: "doctorList",
                newName: "DoctorId");

            migrationBuilder.AddColumn<byte[]>(
                name: "ImageFileData",
                table: "testResaultList",
                type: "varbinary(max)",
                nullable: false,
                defaultValue: new byte[0]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageFileData",
                table: "testResaultList");

            migrationBuilder.RenameColumn(
                name: "DoctorId",
                table: "doctorList",
                newName: "DoctorCode");

            migrationBuilder.AddColumn<DateTime>(
                name: "UserUpdateDate",
                table: "userList",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "testResaultList",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
