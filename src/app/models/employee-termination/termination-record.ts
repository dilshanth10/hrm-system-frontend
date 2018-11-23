import { User } from "./user";
import { TerminationType } from "./termination-type";

export class TerminationRecord {
    id:Number;
    dateOfTermination:Date;
    employee:User = new User();
    terminationType:TerminationType = new TerminationType();
    causeOfTermination:String;
    disciplinaryProcedures:String;
    legalStatus:String;
    exitInterview:File;

}
