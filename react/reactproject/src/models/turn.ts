export class Turn {
    TurnId: number;
    TurnUserId: string;
    DoctorName: string;
    DoctorCode: number;
    DateTurn: Date;
    TurnLocate: string;
    ArrivalConfirmation: boolean;
    constructor(data: Partial<Turn> = {}) {
        this.TurnId = data.TurnId ?? 0;
        this.TurnUserId = data.TurnUserId ?? "Unidentified user";
        this.DoctorName = data.DoctorName ?? "Unidentified doctor";
        this.DoctorCode = data.DoctorCode ?? 0;
        this.DateTurn = data.DateTurn ?? new Date();
        this.TurnLocate = data.TurnLocate ?? "Unidentified Location";
        this.ArrivalConfirmation = data.ArrivalConfirmation ?? false;
    }
}