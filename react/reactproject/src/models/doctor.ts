import { Schedule } from "./schedule";

export class Doctor {
    DoctorCode: number;
    FieldOfSpecialization: string;
    LicenseNumber: number;
    DoctorSchedule: Schedule;

    constructor(data: Partial<Doctor> = {}) {
        this.DoctorCode = data.DoctorCode ?? 0;
        this.FieldOfSpecialization = data.FieldOfSpecialization ?? "";
        this.LicenseNumber = data.LicenseNumber ?? 0;
        this.DoctorSchedule = data.DoctorSchedule ?? new Schedule();
    }
}
