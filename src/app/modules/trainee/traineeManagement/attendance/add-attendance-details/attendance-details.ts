import { Time } from "@angular/common";

export class AttendanceDetails {
    id:number;
    trainee:Number;
	startTime:Date;
	endTime:Time;
	AttendDate:Date;
    updateAt:Date;
    attendantStatus:Number;
	attendType:Number;
	duration:any;
}
