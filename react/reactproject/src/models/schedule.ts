import { Turn } from "./turn";

export class Schedule {
    Turns: Turn[];

    constructor(data: Partial<Schedule> = {}) {
        this.Turns = data.Turns ?? [];
    }
}
