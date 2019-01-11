<<<<<<< HEAD
import { User } from "src/app/models/self-service/user";

export class Trainer {
    id:number;
    user:User=new User;
=======
import { User } from "./user";

export class Trainer {
    id: Number;
    position: String;
    specializedArea: String;
    user:User = new User();
>>>>>>> 506040815375a79a3df1f4fda84ab8e1b7160c03
}
