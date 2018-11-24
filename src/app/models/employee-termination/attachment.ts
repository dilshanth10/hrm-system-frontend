import { TerminationRecord } from "./termination-record";

export class Attachment {
    id:Number;
    attachment:File;
    terminationRecord:TerminationRecord = new TerminationRecord();


}
