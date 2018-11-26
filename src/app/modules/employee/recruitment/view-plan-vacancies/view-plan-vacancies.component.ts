import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { PlanVacancyService } from '../Service/plan-vacancy.service';
import { PlanVacancy } from '../Modal/plan-vacancy';

@Component({
  selector: 'app-view-plan-vacancies',
  templateUrl: './view-plan-vacancies.component.html',
  styleUrls: ['./view-plan-vacancies.component.css']
})
export class ViewPlanVacanciesComponent implements OnInit {
  planVacancyObj: PlanVacancy = new PlanVacancy();
  planVacancy: PlanVacancy[];
  EditplanVacancyObj: PlanVacancy = new PlanVacancy();

  displayedColumns: string[] = ['view', 'title', 'referencenumber',  'no', 'department', 'salary',  'button'];

  plan = [
    { 'view':'','title': 'Manager', 'referencenumber': '1',  'no': '2', 'department': 'HR', 'salary': '10000.00',  'button': '' }
  ]
  dataSource = new MatTableDataSource<any>(this.plan);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private planVacancyService: PlanVacancyService) { }

  ngOnInit() {
  //   this.getPlanVacancy();
  //   this.dataSource = new MatTableDataSource<any>(this.plan);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


  // getPlanVacancy() {
  //   this.planVacancyService.getAllPlanVacancy.subscribe(data => {
  //     console.log(data);
  //     this.planVacancy = data;
  //   });
  }
  // addRole() {
  //   this.roleservice.createRole(this.planVacancyObj).subscribe(data => {
  //    // alert("Role Added Sucessfully");
  //     this.getRole();
  //   });
  //   this.clearRoleFunction();
  // }
  // //Assign to datas in Delete Model and Edit Model
  // editRole(role) {
  //   console.log(role);
  //   this.EditroleObj = Object.assign({}, role);
  // }
  // deleteRoleById(role) {
  //   console.log(role);
  //   this.roleservice.deleteRole(role).subscribe(data => {
  //     //this.roleObj.id=role.id
  //    //alert("Role Deleted Sucessfully");
  //     this.getRole();
  //     // console.log(leaveType);
  //   });
  //   this.clearRoleFunction();
  // }
  // updateRoleById() {
  //   this.roleservice.updateRoleType(this.EditroleObj).subscribe(data => {
  //    // alert("Role Updated Sucessfully");
  //     this.getRole();
  //   });
  //   this.clearRoleFunction();
  // }

}
