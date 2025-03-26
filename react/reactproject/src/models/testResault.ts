export class TestResult {
    TestId: number;
    TestDate: Date;
    ImageFile: string; // Base64 string
    PatientId: number;
    Summary: string;

    constructor(data: Partial<TestResult> = {}) {
        this.TestId = data.TestId ?? 0;
        this.TestDate = data.TestDate ?? new Date();
        this.ImageFile = data.ImageFile ?? "";
        this.PatientId = data.PatientId ?? 0;
        this.Summary = data.Summary ?? "No summary available";
    }
}
