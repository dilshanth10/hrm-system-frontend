import { User } from "src/app/models/employee-termination/user";

export class LoginCredential {
    id: number;
    username: string;
    user: User;
    email: string;
    password: string;
    createAt: Date;
    updatedAt: Date;
    roles: number;
}
