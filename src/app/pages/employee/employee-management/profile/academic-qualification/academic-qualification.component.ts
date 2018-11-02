import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-academic-qualification',
  templateUrl: './academic-qualification.component.html',
  styleUrls: ['./academic-qualification.component.css']
})
export class AcademicQualificationComponent implements OnInit {

 
  displayedColumns: string[] = ['type','year', 'name', 'subject','graduation', 'grading'];

  acadamic = [
    { 'type':'Primary Education','year':'2018', 'name':'abc', 'subject':'IT' , 'graduation':'2000', 'grading':'A'},
    { 'type':'Secondary Education','year':'2019', 'name':'xyz', 'subject':'IT' , 'graduation':'2000', 'grading':'B' },
    { 'type':'Primary Education','year':'2018', 'name':'abc', 'subject':'IT' , 'graduation':'2000', 'grading':'A'},
    { 'type':'Secondary Education','year':'2019', 'name':'xyz', 'subject':'IT' , 'graduation':'2000', 'grading':'B' }
   
  ]
  dataSource = new MatTableDataSource<any>(this.acadamic);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.acadamic);
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
