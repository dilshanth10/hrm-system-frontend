import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-highest-qualification',
  templateUrl: './view-highest-qualification.component.html',
  styleUrls: ['./view-highest-qualification.component.css']
})
export class ViewHighestQualificationComponent implements OnInit {

  displayedColumns: string[] = ['h_id','h_type','h_button'];

  highestQualification = [
    { 'h_id':'1','h_type':'abc','h_button':' '}
  
  ]
  dataSource = new MatTableDataSource<any>(this.highestQualification);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.highestQualification);
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