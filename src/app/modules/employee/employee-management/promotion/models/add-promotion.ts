import { User } from "src/app/models/self-service/user";

export class AddPromotion {
	id:number;
	userId: number;
	designationId: number;
	promotedDate: Date;
	remark: String;
	salary: number;
	promotedBy: number;
}
