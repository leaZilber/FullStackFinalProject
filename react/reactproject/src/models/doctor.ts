import { Schedule } from "./schedule";
import { User } from "./user";

export class Doctor extends User {
    DoctorCode: number;
    FieldOfSpecialization: string;
    LicenseNumber: number;
    DoctorSchedule: Schedule;

    constructor(data: Partial<Doctor> = {}) {
        super(data); // קריאה לבנאי של `User`
        this.DoctorCode = data.DoctorCode ?? 0;
        this.FieldOfSpecialization = data.FieldOfSpecialization ?? "";
        this.LicenseNumber = data.LicenseNumber ?? 0;
        this.DoctorSchedule = data.DoctorSchedule ?? new Schedule();
    }
}
