import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-promotion-denied-history',
  templateUrl: './promotion-denied-history.component.html',
  styleUrls: ['./promotion-denied-history.component.css']
})
export class PromotionDeniedHistoryComponent implements OnInit {
  displayedColumns: string[] = ['deniedID', 'reqID','DesignID', 'position','denieddate','deniedremark','deniedBy','edit/delete'];

  Creditcheck = [
    { 'deniedID':'001', 'reqID':'1','DesignID':'1', 'position':'ASE','denieddate':'25.04.2001','deniedremark':'Bad','deniedBy':'ghg','edit/delete':'' },
    { 'deniedID':'002', 'reqID':'2','DesignID':'2', 'position':'SE','denieddate':'25.04.2004','deniedremark':'Bad','deniedBy':'ghg','edit/delete':'' }
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
