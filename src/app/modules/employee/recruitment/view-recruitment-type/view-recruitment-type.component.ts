import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-view-recruitment-type',
  templateUrl: './view-recruitment-type.component.html',
  styleUrls: ['./view-recruitment-type.component.css']
})
export class ViewRecruitmentTypeComponent implements OnInit {

  displayedColumns: string[] = ['r_id','r_type','r_button'];

  recruitment = [
    { 'r_id':'1','r_type':'abc','r_button':' '}
  
  ]
  dataSource = new MatTableDataSource<any>(this.recruitment);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.recruitment);
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