import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'role'];

  role = [
    { 'id':'1', 'roleName':'Manager' },
    { 'id':'2', 'roleName':'Manager' },
    { 'id':'3', 'roleName':'Manager' },
    { 'id':'4', 'roleName':'Manager' },
    { 'id':'5', 'roleName':'Manager' },
    { 'id':'6', 'roleName':'Manager' },
    { 'id':'7', 'roleName':'Manager' }
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
