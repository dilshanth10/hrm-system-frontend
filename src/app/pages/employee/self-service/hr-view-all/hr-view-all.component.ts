import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-hr-view-all',
  templateUrl: './hr-view-all.component.html',
  styleUrls: ['./hr-view-all.component.css']
})
export class HRViewAllComponent implements OnInit {
  displayedColumns: string[] = ['id', 'empName','date','type','status','description'];

  history = [
    { 'id':'1', 'empName':'Manager', 'date':'12/1/2018', 'type' :'Request', 'status':'accept', 'description':'jhbj'},
    { 'id':'2', 'empName':'Manager', 'date':'12/1/2018', 'type' :'Complain', 'status':'Rejected', 'description':'jhbj'}
 
  ]
  dataSource = new MatTableDataSource<any>(this.history);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.history);
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
