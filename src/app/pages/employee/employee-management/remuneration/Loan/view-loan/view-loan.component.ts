import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-loan',
  templateUrl: './view-loan.component.html',
  styleUrls: ['./view-loan.component.css']
})
export class ViewLoanComponent implements OnInit {
  displayedColumns: string[] = ['id', 'loanType','minimumServicePeriod','loanAmount','interest','edit','delete'];

  loan = [
    { 'id':'1', 'loanType':'EmpLoan', 'minimumServicePeriod':'1', 'loanAmount' :'250000', 'interest':'15',"edit":"edit","delete":"delete"},
    { 'id':'2', 'loanType':'HRLoan', 'minimumServicePeriod':'3', 'loanAmount' :'500000', 'interest':'12',"edit":"edit","delete":"delete"},
    { 'id':'3', 'loanType':'ManagerLoan','minimumServicePeriod':'1','loanAmount' :'250000', 'interest':'16',"edit":"edit","delete":"delete"},
    { 'id':'4', 'loanType':'Manager', 'minimumServicePeriod':'6', 'loanAmount' :'1000000', 'interest':'10',"edit":"edit","delete":"delete"},
    { 'id':'5', 'loanType':'Manager', 'minimumServicePeriod':'8', 'loanAmount' :'1500000', 'interest':'14',"edit":"edit","delete":"delete"},
    { 'id':'6', 'loanType':'Manager', 'minimumServicePeriod':'9', 'loanAmount' :'2000000', 'interest':'14',"edit":"edit","delete":"delete"},
    { 'id':'7', 'loanType':'Manager', 'minimumServicePeriod':'4', 'loanAmount' :'600000', 'interest':'12',"edit":"edit","delete":"delete"}
  ]
  dataSource = new MatTableDataSource<any>(this.loan);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.loan);
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
