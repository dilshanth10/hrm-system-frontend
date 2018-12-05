import { HighestQualification } from "./highest-qualification";
import { Job } from "./job";

export class RecordApplicantCv {
    id: Number;
    highestQualificationId: HighestQualification;
    jobId: Job;
    fullName: String;
    nic: String;
    email: String;
    dateOfBirth: Date;
    address: String;
    cvFile: File;

}

