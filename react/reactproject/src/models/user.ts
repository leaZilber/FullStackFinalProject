import { TestResult } from "./testResults";

export class User {
    UserId: number;
    UserName: string;
    UserEmail: string;
    UserEncryptedPassword: string;
    UserRole: string;
    UserPhone: string;
    UserAddress: string;
    UserBirth: Date;
    UserCreateDate: Date;
    UserUpdateDate: Date;
    TestResualtArray: TestResult[];
    // private UserPropile:URL;
    constructor(data: Partial<User> = {}) {
        this.UserId = data.UserId ?? 0;
        this.UserName = data.UserName ?? "";
        this.UserEmail = data.UserEmail ?? "";
        this.UserEncryptedPassword = data.UserEncryptedPassword ?? "";
        this.UserRole = data.UserRole ?? "";
        this.UserPhone = data.UserPhone ?? "";
        this.UserAddress = data.UserAddress ?? "";
        this.UserBirth = data.UserBirth ?? new Date();
        this.UserCreateDate = data.UserCreateDate ?? new Date();
        this.UserUpdateDate = data.UserUpdateDate ?? new Date();
        this.TestResualtArray = data.TestResualtArray ?? [];
    }
}