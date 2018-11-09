import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-salary-chart',
  templateUrl: './view-salary-chart.component.html',
  styleUrls: ['./view-salary-chart.component.css']
})
export class ViewSalaryChartComponent implements OnInit {

  displayedColumns: string[] = ['name', 'employeeNo','basicSalary','epf8','paye','stampDuty','advance','loan','netSalary','epf12','etf3','satutoryPayment','edit','delete'];

  appoinments = [
    { 'id':'1', 'position':'Manager', 'department':'HR', 'jobdescription' :'test1', 'dateofappoinement':'1561', 'typeofappoinement':'jhbj', 'salary':'15414'},
    { 'id':'2', 'position':'Manager', 'department':'HR', 'jobdescription' :'test1', 'dateofappoinement':'1561', 'typeofappoinement':'jhbj', 'salary':'15414'},
    { 'id':'3', 'position':'Manager', 'department':'HR', 'jobdescription' :'test1', 'dateofappoinement':'1561', 'typeofappoinement':'jhbj', 'salary':'15414'},
    { 'id':'4', 'position':'Manager', 'department':'HR', 'jobdescription' :'test1', 'dateofappoinement':'1561', 'typeofappoinement':'jhbj', 'salary':'15414'},
    { 'id':'5', 'position':'Manager', 'department':'HR', 'jobdescription' :'test1', 'dateofappoinement':'1561', 'typeofappoinement':'jhbj', 'salary':'15414'},
    { 'id':'6', 'position':'Manager', 'department':'HR', 'jobdescription' :'test1', 'dateofappoinement':'1561', 'typeofappoinement':'jhbj', 'salary':'15414'},
    { 'id':'7', 'position':'Manager', 'department':'HR', 'jobdescription' :'test1', 'dateofappoinement':'1561', 'typeofappoinement':'jhbj', 'salary':'15414'}
  ]
  dataSource = new MatTableDataSource<any>(this.appoinments);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.appoinments);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
