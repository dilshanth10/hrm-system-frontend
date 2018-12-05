import { Job } from "./job";

import { Department } from "./department";
import { RecruitmentType } from "./recruitment-type";
import { User } from "./user";

export class PlanVacancy {
    id: Number;
    noOfVacancy: Number;
    salaryScale: Number;
    vacancyOpenDate: Date;
    vacancyCloseDate: Date;
    interviewDate: Date;
    keyRecuitment: String;

    user: Number;
    job: Number;
    department: Number;
    recruitment: Number;

    // user:User = new User();
    // job:Job = new Job();
    // department:Department= new Department();
    // recruitmentType:RecruitmentType= new RecruitmentType();
}
