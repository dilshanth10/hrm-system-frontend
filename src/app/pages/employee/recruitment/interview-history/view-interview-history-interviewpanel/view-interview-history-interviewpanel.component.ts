import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-interview-history-interviewpanel',
  templateUrl: './view-interview-history-interviewpanel.component.html',
  styleUrls: ['./view-interview-history-interviewpanel.component.css']
})
export class ViewInterviewHistoryInterviewpanelComponent implements OnInit {

  
  displayedColumns: string[] = ['nameofevent', 'budjet','dateofevent2','dateofevent3','dateofevent4','dateofevent5','benificiaries','delete'];

  viewwelfare = [
    { 'nameofevent':'AA', 'budjet':'1CR' ,'dateofevent2':'10-08-2018','dateofevent3':'10-08-2018','dateofevent4':'10-08-2018','dateofevent5':'10-08-2018','benificiaries':'AA1','delete':'delete'}
    // { 'nameofevent':'BB', 'budjet':'2CR' ,'benificiaries':'BB1','delete':'delete'},
    // { 'nameofevent':'CC', 'budjet':'3CR' ,'benificiaries':'CC1','delete':'delete'},
    // { 'nameofevent':'DD', 'budjet':'4CR' ,'benificiaries':'DD1','delete':'delete'},
    // { 'nameofevent':'EE', 'budjet':'5CR' ,'benificiaries':'EE1','delete':'delete'}
    
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
