import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-interview-history-interviewdetails',
  templateUrl: './view-interview-history-interviewdetails.component.html',
  styleUrls: ['./view-interview-history-interviewdetails.component.css']
})
export class ViewInterviewHistoryInterviewdetailsComponent implements OnInit {

 
  displayedColumns: string[] = ['nameofevent', 'budjet','benificiaries','dateofevent','dateofevent1','edit','delete'];

  viewwelfare = [
    { 'nameofevent':'AA', 'budjet':'1CR' ,'benificiaries':'AA1','dateofevent':'10-08-2018','dateofevent1':'10-08-2018','edit':'edit','delete':'delete'}
    // { 'nameofevent':'BB', 'budjet':'2CR' ,'benificiaries':'BB1','dateofevent':'10-09-2018','edit':'edit','delete':'delete'},
    // { 'nameofevent':'CC', 'budjet':'3CR' ,'benificiaries':'CC1','dateofevent':'10-10-2018','edit':'edit','delete':'delete'},
    // { 'nameofevent':'DD', 'budjet':'4CR' ,'benificiaries':'DD1','dateofevent':'10-11-2018','edit':'edit','delete':'delete'},
    // { 'nameofevent':'EE', 'budjet':'5CR' ,'benificiaries':'EE1','dateofevent':'10-12-2018','edit':'edit','delete':'delete'}
    
  ]
  dataSource = new MatTableDataSource<any>(this.viewwelfare);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.viewwelfare);
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
