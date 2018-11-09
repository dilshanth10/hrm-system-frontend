import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-promotion-history',
  templateUrl: './promotion-history.component.html',
  styleUrls: ['./promotion-history.component.css']
})
export class PromotionHistoryComponent implements OnInit {

  displayedColumns: string[] = ['name', 'emid', 'emposition', 'dateofjoining', 'view'];

  promotion = [
    { 'name':'priya', 'emid':'6', 'emposition':'Manager', 'dateofjoining':'1/2/2018','view':'View'},
    { 'name':'Jpriya', 'emid':'2', 'emposition':'HR', 'dateofjoining':'13/5/2017', 'view':'View'},
    { 'name':'Jeni', 'emid':'3', 'emposition':'Manager', 'dateofjoining':'3/6/2018', 'view':'View'},
    
  ]

  dataSource = new MatTableDataSource<any>(this.promotion);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.promotion);
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
