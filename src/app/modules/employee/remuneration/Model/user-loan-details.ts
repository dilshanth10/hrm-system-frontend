export class UserLoanDetails {

    userId: {
        userId: number;
        userName: string;
    }
    loanObtainedDate: Date;
    
    loanDetailsEntity: {
        amount: number;
    }
    installmentAmount: number;
    installmentDate: Date;
    redumptionDate: Date;
}
