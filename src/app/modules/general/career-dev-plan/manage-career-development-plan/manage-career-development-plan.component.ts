import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CareerDevPlan } from '../Model/career-dev-plan';
import { CareerDevPlanService } from '../Service/career-dev-plan.service';
import { UserService } from '../Service/user.service';
import { User } from '../Model/user';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-manage-career-development-plan',
  templateUrl: './manage-career-development-plan.component.html',
  styleUrls: ['./manage-career-development-plan.component.css']
})
export class ManageCareerDevelopmentPlanComponent implements OnInit {

  careerDevPlan: CareerDevPlan[];
  careerDevPlanObj = new CareerDevPlan();
  careerDevPlanObjEdit = new CareerDevPlan();
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
<<<<<<< HEAD
    this.careerDevPlanService.createcareerDevPlan(this.careerDevPlanObj).subscribe(data => {
      console.log(data);
      this.getCareerDevPlan();
      this. clearRequestPromotion() ;
    })
=======
    // this.careerDevPlanService.createcareerDevPlan(this.careerDevPlanObj).subscribe(data => {
    //   console.log(data);
    //   this.getCareerDevPlan();
    // })
>>>>>>> 96322e17999984078e3e3352c13ded74687493ff
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
    this.careerDevPlanObjEdit = Object.assign({}, plan);
  }

  updateCareerDevPlans() {
    this.careerDevPlanService.updatecareerDevPlan(this.careerDevPlanObjEdit).subscribe(data => {
      console.log(data);
      this.msg = "Data updated successfully";
      this.getCareerDevPlan();
    })
  }

  clearRequestPromotion() {
    this.careerDevPlanObj.userId = null;
    this.careerDevPlanObj.cdpId = null;
    this.careerDevPlanObj.status = null;
  }

  deleteCareerDev(plan) {
    this.careerDevPlanService.deletecareerDevPlan(plan).subscribe(data => {
      this.careerDevPlanObjEdit.id = plan.id;
      // alert("User deleted");
      this.getCareerDevPlan();
    });
  }

}
