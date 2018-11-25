import { LeaveType } from "./leave-type";
import { User } from "./user";

export class LeaveRequest {
    leaveType : LeaveType;
    startDate :Date;
    endDate : Date;
    reason : String;
    attachment : File;
    user :User;
}
