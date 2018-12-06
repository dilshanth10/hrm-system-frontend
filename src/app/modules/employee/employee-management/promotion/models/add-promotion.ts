import { User } from "src/app/models/self-service/user";
import { Designation } from "./designation";

export class AddPromotion {
	id:number;
	userId: number;
	designationId: Designation;
	promotedDate: Date;
	remark: String;
	salary: number;
	promotedBy: number;
}
