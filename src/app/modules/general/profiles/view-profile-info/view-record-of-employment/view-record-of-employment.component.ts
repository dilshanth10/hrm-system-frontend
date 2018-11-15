import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-record-of-employment',
  templateUrl: './view-record-of-employment.component.html',
  styleUrls: ['./view-record-of-employment.component.css']
})

export class ViewRecordOfEmploymentComponent implements OnInit {

  displayedColumns: string[] = ['role', 'status','period','name','leave','salary'];

  role = [
    {  'roleName':'1', 'status': '','period':'','name':'','leave':'','salary':''},
    {  'roleName':'2', 'status': '','period':'','name':'','leave':'','salary':''},
    {  'roleName':'3', 'status': '','period':'','name':'','leave':'','salary':''} 
  ]
  dataSource = new MatTableDataSource<any>(this.role);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  

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
  constructor(private router:Router) { }

  
  
  gotoNext(){
    this.router.navigate(['/profile/referees']);
  }
  goBack(){
    this.router.navigate(['/profile/ProfQual']);
  }

}
