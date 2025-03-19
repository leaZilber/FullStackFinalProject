export class TestResult {
    TestId: string;
    TestDate: Date;
    ImageUrl: string;
    PatientId: string;
    Summary: string;
    constructor(data: Partial<TestResult> = {}) {
        this.TestId = data.TestId ?? "UNKNOWN";
        this.TestDate = data.TestDate ?? new Date();
        this.ImageUrl = data.ImageUrl ?? "";
        this.PatientId = data.PatientId ?? "";
        this.Summary = data.Summary ?? "No summary available";
    }
}
