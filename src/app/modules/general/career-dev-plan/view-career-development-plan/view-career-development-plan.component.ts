import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { User } from '../Model/user';
import { CareerDevPlan } from '../Model/career-dev-plan';
import { UserService } from 'src/app/services/self-service/user.service';
import { EmpViewCareerPlanService } from '../Service/emp-view-career-plan.service';

@Component({
  selector: 'app-view-career-development-plan',
  templateUrl: './view-career-development-plan.component.html',
  styleUrls: ['./view-career-development-plan.component.css']
})
export class ViewCareerDevelopmentPlanComponent implements OnInit {

  careerDevPlan: CareerDevPlan[];
  careerDevPlanObj = new CareerDevPlan();
  plans: any;
  userObj = new User();
  users: User[];
  msg: any;

  displayedColumns: string[] = ['employeeName', 'position', 'PARDate', 'PARScore', 'plans'];
  empDet = [
    { 'employeeName': 'Raj', 'position': 'Software Engineer', 'PARDate': '2018-10-09', 'PARScore': '', 'plans': '' },
    { 'employeeName': 'Thaj', 'position': 'Software Engineer', 'PARDate': '2018-10-09', 'PARScore': '', 'plans': '' },
    { 'employeeName': 'Juli', 'position': 'Software Engineer', 'PARDate': '2018-10-09', 'PARScore': '', 'plans': '' },
    { 'employeeName': 'Joki', 'position': 'Software Engineer', 'PARDate': '2018-10-09', 'PARScore': '', 'plans': '' }
  ]

  dataSource = new MatTableDataSource<any>(this.empDet);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private empViewCareerPlanService: EmpViewCareerPlanService,
    private userService: UserService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.empDet);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getCareerDevPlan() {
    this.empViewCareerPlanService.getCareerDevPlan().subscribe(data => {
      this.careerDevPlan = data;
      console.log(data);
    })
  }


}
