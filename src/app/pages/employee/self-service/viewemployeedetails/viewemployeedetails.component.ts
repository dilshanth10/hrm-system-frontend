import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-viewemployeedetails',
  templateUrl: './viewemployeedetails.component.html',
  styleUrls: ['./viewemployeedetails.component.css']
})
export class ViewemployeedetailsComponent implements OnInit {

  displayedColumns: string[] = ['fname','appoinmentDate'];

  viewEmp = [
    {'fname':'Jeni', 'appoinmentDate':"2018/02/24"},
    {'fname':'Jeni', 'appoinmentDate':"2018/04/24"} 
  ]

  dataSource = new MatTableDataSource<any>(this.viewEmp);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.viewEmp);
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
