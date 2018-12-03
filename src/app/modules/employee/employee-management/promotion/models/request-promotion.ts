import { Designation } from "./designation";
import { User } from "src/app/models/employee-termination/user";

export class RequestPromotion {
	id: number;
    userId: User=new User();
    designationId: Designation=new Designation();
    promotionRemark: string;
    recommendedBy: User=new User();
    createdAt: Date;
    updatedAt: Date;
}