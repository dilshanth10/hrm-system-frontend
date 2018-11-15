import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-promotion-denied-history',
  templateUrl: './promotion-denied-history.component.html',
  styleUrls: ['./promotion-denied-history.component.css']
})
export class PromotionDeniedHistoryComponent implements OnInit {
  displayedColumns: string[] = ['emploid', 'emploname', 'position','denieddate','deniedremark','edit/delete'];

  Creditcheck = [
    { 'emploid':'001', 'emploname':'em1', 'position':'ASE','denieddate':'25.04.2001','deniedremark':'Bad','edit/delete':'' },
    { 'emploid':'002', 'emploname':'em2', 'position':'SE','denieddate':'25.04.2004','deniedremark':'Bad','edit/delete':'' }
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
