import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-promotion-history',
  templateUrl: './promotion-history.component.html',
  styleUrls: ['./promotion-history.component.css']
})
export class PromotionHistoryComponent implements OnInit {

  displayedColumns: string[] = ['ename','position','datepromoted','promotionremark','salary','edit','delete','view'];

  promotion = [
    {'ename':'Jeni', 'position':"employee",'datepromoted':"2017/09/22",'promotionremark':"Good",'salary':"30,000" ,"edit":"Edit","delete":"Delete","view":"View"},
    { 'ename':'Priya','position':"manager",'datepromoted':"2017/08/09",'promotionremark':"Good",'salary':"50,000" ,"edit":"Edit","delete":"Delete","view":"View"},
    { 'ename':'Jpriya','position':"HR",'datepromoted':"2018/01/12",'promotionremark':"Good",'salary':"100,000" ,"edit":"Edit","delete":"Delete","view":"View"}
    
    
  ]

  dataSource = new MatTableDataSource<any>(this.promotion);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.promotion);
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
