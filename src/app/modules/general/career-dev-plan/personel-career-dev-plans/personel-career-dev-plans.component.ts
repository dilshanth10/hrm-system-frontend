import { Component, OnInit, ViewChild } from '@angular/core';
import { CareerDevPlan } from '../Model/career-dev-plan';
import { User } from '../Model/user';
import { MatPaginator, MatSort } from '@angular/material';
import { UserService } from 'src/app/services/self-service/user.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { EmpViewCareerPlanService } from '../Service/emp-view-career-plan.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

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
  
  info: any;
  role: string;
  userId: number;

  displayedColumns: string[] = ['plans', 'status', 'edit', 'delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private empViewCareerPlanService: EmpViewCareerPlanService,
    private userService: UserService,
    private interactionService: InteractionService,
    private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.role = this.info.authorities;
    this.userId=this.info.authorities;
  }

  getCareerDevPlan() {
    this.empViewCareerPlanService.getCareerDevPlan().subscribe(data => {
      this.careerDevPlan = data;
      console.log(data);
    })
  }

  createCareerDevPlan() {
    this.empViewCareerPlanService.createcareerDevPlan(this.careerDevPlanObj).subscribe(data => {
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
    this.empViewCareerPlanService.updatecareerDevPlan(this.careerDevPlanObj).subscribe(data => {
      console.log(data);
      this.msg = "Data updated successfully";
    })
  }

}

