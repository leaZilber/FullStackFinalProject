import { Turn } from "./turn";

export class Schedule {
    Turns: Turn[];
    ScheduleId: number|undefined;
    DoctorId: number;
    constructor(data: Partial<Schedule> = {}) {
        this.Turns = data.Turns ?? [];
        this.ScheduleId = data.ScheduleId;
        this.DoctorId = data.DoctorId ?? 0;
    }
}
