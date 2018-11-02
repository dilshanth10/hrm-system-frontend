import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-record-of-employment',
  templateUrl: './record-of-employment.component.html',
  styleUrls: ['./record-of-employment.component.css']
})
export class RecordOfEmploymentComponent implements OnInit {

  displayedColumns: string[] = ['role', 'status','period','name','leave','salary'];

  role = [
    {  'roleName':'', 'status': '','period':'','name':'','leave':'','salary':''},
    {  'roleName':'', 'status': '','period':'','name':'','leave':'','salary':''},
    {  'roleName':'', 'status': '','period':'','name':'','leave':'','salary':''} 
  ]
  dataSource = new MatTableDataSource<any>(this.role);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.role);
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
