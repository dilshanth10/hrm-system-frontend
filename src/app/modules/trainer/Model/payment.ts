import { User } from "./user";

export class Payment {
    id: Number;
    trainingDate: Date;
    amountPaid: Number;
    remainingAmount: Number;
    paymentStatus: String;
    user= new User();
}
