import { Component, OnInit } from '@angular/core';
import { CareerDevPlanService } from '../../Service/career-dev-plan.service';
import { CareerDevPlan } from '../../Model/career-dev-plan';
import { InteractionService } from 'src/app/services/interaction.service';


@Component({
  selector: 'app-career-development-plan-form',
  templateUrl: './career-development-plan-form.component.html',
  styleUrls: ['./career-development-plan-form.component.css']
})
export class CareerDevelopmentPlanFormComponent implements OnInit {
  CareerDevPlanObj = new CareerDevPlan
  CareerDevPlan: CareerDevPlan[];
  msg: any;

  constructor(
    private careerDevPlanService: CareerDevPlanService,
    private interactionService:InteractionService) { }

  ngOnInit() {
  }

  getcareerDevlanFromCareerDevPlanInteratcion(){
    this.interactionService.comanyCDPDataSource$.subscribe(data => {
      this.CareerDevPlanObj=data;
    })
  }

  updateCareerDevPlans() {
    this.careerDevPlanService.updatecareerDevPlan(this.CareerDevPlanObj).subscribe(data => {
      console.log(data);
      this.msg = "Data updated successfully";
    })
  }
}
