export class TestResult {
    testCode: string;
    testDate: Date;
    imageUrl: string;
    patientId: string;
    summary: string;
    constructor(data: Partial<TestResult> = {}) {
        this.testCode = data.testCode ?? "UNKNOWN";
        this.testDate = data.testDate ?? new Date();
        this.imageUrl = data.imageUrl ?? "";
        this.patientId = data.patientId ?? "";
        this.summary = data.summary ?? "No summary available";
    }
}
