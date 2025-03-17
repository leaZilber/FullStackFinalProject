export class Message {
    MessageId: number;
    SenderId: number;
    ReceiverId: number;
    MessageContent: string;
    MessageDate: Date;
    constructor(data: Partial<Message> = {}) {
        this.MessageId = data.MessageId ?? 0;
        this.SenderId = data.SenderId ?? 0;
        this.ReceiverId = data.ReceiverId ?? 0;
        this.MessageContent = data.MessageContent ?? "defalt content";
        this.MessageDate = data.MessageDate ?? new Date();
    }
}
