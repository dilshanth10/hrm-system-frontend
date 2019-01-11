import { Time } from "@angular/common";
import { Trainer } from "./trainer";

export class TrainingSchedule {
    id: Number;
    trainingTopic: String;
    date: Date;
    totalCoveredhours: Time;
    status: String;
    trainer = new Trainer();

}
