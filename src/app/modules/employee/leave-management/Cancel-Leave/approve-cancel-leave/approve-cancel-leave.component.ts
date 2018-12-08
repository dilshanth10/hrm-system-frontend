import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-approve-cancel-leave',
  templateUrl: './approve-cancel-leave.component.html',
  styleUrls: ['./approve-cancel-leave.component.css']
})
export class ApproveCancelLeaveComponent implements OnInit {

  displayedColumns: string[] = ['name','requestId','department','type','reason','accept/reject'];

  cancel_leave = [
    {'name':"john",'requestId':"1", 'namdepartmente':"Development",'type':"annual",'reason':"",'accept/reject':"" },
    {'name':"siva",'requestId':"2", 'namdepartmente':"QA",'type':"casual",'reason':"",'accept/reject':"" },
    
  ]

  dataSource = new MatTableDataSource<any>(this.cancel_leave);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.cancel_leave);
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
