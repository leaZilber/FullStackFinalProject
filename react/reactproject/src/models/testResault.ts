export class TestResult {
    TestCode: string;
    TestDate: Date;
    ImageUrl: string;
    PatientId: string;
    Summary: string;
    constructor(data: Partial<TestResult> = {}) {
        this.TestCode = data.TestCode ?? "UNKNOWN";
        this.TestDate = data.TestDate ?? new Date();
        this.ImageUrl = data.ImageUrl ?? "";
        this.PatientId = data.PatientId ?? "";
        this.Summary = data.Summary ?? "No summary available";
    }
}
