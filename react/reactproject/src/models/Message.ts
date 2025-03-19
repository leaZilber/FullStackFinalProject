export class Message {
    MessageId: number;
    UserId: number;
    ReceiverId: number;
    MessageContent: string;
    MessageDate: Date;
    constructor(data: Partial<Message> = {}) {
        this.MessageId = data.MessageId ?? 0;
        this.UserId = data.UserId ?? 0;
        this.ReceiverId = data.ReceiverId ?? 0;
        this.MessageContent = data.MessageContent ?? "defalt content";
        this.MessageDate = data.MessageDate ?? new Date();
    }
}
