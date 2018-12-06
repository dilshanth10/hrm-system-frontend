import { Component, OnInit, ViewChild } from '@angular/core';
import { CareerDevPlan } from '../Model/career-dev-plan';
import { User } from '../Model/user';
import { MatPaginator, MatSort } from '@angular/material';
import { CareerDevPlanService } from '../Service/career-dev-plan.service';
import { UserService } from 'src/app/services/self-service/user.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-personel-career-dev-plans',
  templateUrl: './personel-career-dev-plans.component.html',
  styleUrls: ['./personel-career-dev-plans.component.css']
})
export class PersonelCareerDevPlansComponent implements OnInit {

  careerDevPlan: CareerDevPlan[];
  careerDevPlanObj = new CareerDevPlan();
  plans: any;
  userObj = new User();
  users: User[];
  msg: any;

  displayedColumns: string[] = ['plans', 'status', 'edit', 'delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private careerDevPlanService: CareerDevPlanService, private userService: UserService,
    private interactionService: InteractionService) { }

  ngOnInit() {
    this.getCareerDevPlan();
    this.getUser();
  }

  getCareerDevPlan() {
    this.careerDevPlanService.getCareerDevPlan().subscribe(data => {
      this.careerDevPlan = data;
      console.log(data);
    })
  }

  createCareerDevPlan() {
    this.careerDevPlanService.createcareerDevPlan(this.careerDevPlanObj).subscribe(data => {
      console.log(data);
      this.getCareerDevPlan();
    })
  }

  getUser() {
    return this.userService.getUser().subscribe(
      data => {
        this.users = data;
        this.userObj.id = 0;
      })
  }

  getCareerDevPlanById(plans) {
    this.interactionService.sendCDPService(plans);
    console.log(plans);
    this.careerDevPlanObj = Object.assign({}, this.careerDevPlanObj);
  }

  editCareerDev(plan) {
    console.log(plan);
    this.careerDevPlanObj = Object.assign({}, plan);
  }

  updateCareerDevPlans() {
    this.careerDevPlanService.updatecareerDevPlan(this.careerDevPlanObj).subscribe(data => {
      console.log(data);
      this.msg = "Data updated successfully";
    })
  }

}

