import { Turn } from "./turn";

export class Schedule {
    Turns: Turn[];
    ScheduleId :number;
    constructor(data: Partial<Schedule> = {}) {
        this.Turns = data.Turns ?? [];
        this.ScheduleId=data.ScheduleId??0;
    }
}
