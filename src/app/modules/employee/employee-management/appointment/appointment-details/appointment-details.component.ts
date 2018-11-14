import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})




export class AppointmentDetailsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'position','department','jobdescription','dateofappoinement','typeofappoinement','salary'];

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
