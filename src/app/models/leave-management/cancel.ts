import { LeaveRequest } from "./leave-request";

export class Cancel {
    id:number;
    leaveRequest:LeaveRequest;
    reason:String;
    status:String;
}
