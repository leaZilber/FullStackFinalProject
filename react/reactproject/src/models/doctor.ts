import { Schedule } from "./schedule";

export class Doctor {
    DoctorId: number;
    DoctorName: string;
    FieldOfSpecialization: string;
    LicenseNumber: number;
    DoctorSchedule: Schedule;

    constructor(data: Partial<Doctor> = {}) {
        this.DoctorId = data.DoctorId ?? 0;
        this.DoctorName = data.DoctorName ?? "";
        this.FieldOfSpecialization = data.FieldOfSpecialization ?? "";
        this.LicenseNumber = data.LicenseNumber ?? 0;
        this.DoctorSchedule = data.DoctorSchedule ??new Schedule();
    }
}
