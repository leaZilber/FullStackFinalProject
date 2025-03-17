import { Message } from "react-hook-form";
import { TestResult } from "./testResault";
import { Turn } from "./turn";

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
    MessagesArr: Message[];
    TurnsArr:Turn[];
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
        this.MessagesArr = data.MessagesArr ?? [];
        this.TurnsArr=data.TurnsArr??[];
    }
}