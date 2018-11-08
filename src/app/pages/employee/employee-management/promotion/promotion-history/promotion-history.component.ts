import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-promotion-history',
  templateUrl: './promotion-history.component.html',
  styleUrls: ['./promotion-history.component.css']
})
export class PromotionHistoryComponent implements OnInit {

  displayedColumns: string[] = ['position','datepromoted','promotionremark','salary','edit'];

  promotion = [
    { 'position':"employee",'datepromoted':"aaaa/aa/aa",'promotionremark':"",'salary':"ss" ,"edit":"Edit"}
    
    
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
