import { Schedule } from "./schedule";

export class Doctor {
    DoctorId: number | undefined;
    DoctorName: string;
    FieldOfSpecialization: string;
    LicenseNumber: number;
    DoctorSchedule: Schedule;

    constructor(data: Partial<Doctor> = {}) {
        this.DoctorId = data.DoctorId != undefined ? Number(data.DoctorId) : undefined;
        this.DoctorName = data.DoctorName ?? "";
        this.FieldOfSpecialization = data.FieldOfSpecialization ?? "";
        this.LicenseNumber = data.LicenseNumber ?? 0;
        this.DoctorSchedule = data.DoctorSchedule ?? new Schedule();
    }
}
