import { HighestQualification } from "./highest-qualification";
import { Job } from "./job";

export class RecordApplicantCv {
    id: Number;
    fullName: String;
    nic: String;
    email: String;
    dateOfBirth: Date;
    address: String;
    cvFile: File;
    
    // highestQualificationid: Number;
    // jobid: Number;
    highestQualification:HighestQualification=new HighestQualification();
    job:Job=new Job();

}

