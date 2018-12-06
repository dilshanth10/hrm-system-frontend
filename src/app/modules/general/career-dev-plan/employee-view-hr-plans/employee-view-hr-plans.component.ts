import { Component, OnInit } from '@angular/core';
import { CareerDevPlan } from '../Model/career-dev-plan';
import { User } from '../Model/user';
import { CareerDevPlanService } from '../Service/career-dev-plan.service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-employee-view-hr-plans',
  templateUrl: './employee-view-hr-plans.component.html',
  styleUrls: ['./employee-view-hr-plans.component.css']
})
export class EmployeeViewHRPlansComponent implements OnInit {

  careerDevPlan: CareerDevPlan[];
  careerDevPlanObj = new CareerDevPlan();
  plans: any;
  userObj = new User();
  users: User[];
  msg: any;

  constructor(
    private careerDevPlanService: CareerDevPlanService,
    private userService: UserService, ) { }

  ngOnInit() {
    this. getCareerDevPlan();
    this. getUser();
  }

  getCareerDevPlan() {
    this.careerDevPlanService.getCareerDevPlan().subscribe(data => {
      this.careerDevPlan = data;
      console.log(data);
    })
  }

  getUser() {
    return this.userService.getUser().subscribe(
      data => {
        this.users = data;
        this.userObj.id = 0;
      })
    }
} 
