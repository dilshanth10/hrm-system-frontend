import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-promotion-history',
  templateUrl: './promotion-history.component.html',
  styleUrls: ['./promotion-history.component.css']
})
export class PromotionHistoryComponent implements OnInit {
  displayedColumns: string[] = ['emploid', 'emploname',  'position','promdate','promremark','promsalary','edit/delete'];

  Creditcheck = [
    { 'emploid':'001', 'emploname':'em1',  'position':'ASE','promdate':'25.04.2001','promremark':'Good','promsalary':'80000','edit/delete':'' },
    { 'emploid':'002', 'emploname':'em2',  'position':'PM','promdate':'25.04.2006','promremark':'Good','promsalary':'90000','edit/delete':'' }
  
  ]
  dataSource = new MatTableDataSource<any>(this.Creditcheck);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.Creditcheck);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
}
