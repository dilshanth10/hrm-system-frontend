import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-employee-own-history',
  templateUrl: './employee-own-history.component.html',
  styleUrls: ['./employee-own-history.component.css']
})
export class EmployeeOwnHistoryComponent implements OnInit {

  displayedColumns: string[] = ['date', 'type','status','description','attach','reply','myReply','sendReply'];

  history = [
    { 'date':'1', 'type':'Manager', 'status':'12/1/2018', 'description' :'attach', 'attach':'wrfwr', 'reply':'jhbj','myReply':'vwwvw'},
    { 'date':'2', 'type':'Manager', 'status':'12/1/2018', 'description' :'attach', 'attach':'wrfwr', 'reply':'jhbj','myReply':'vwwvw'}
 
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
