import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-internal-external',
  templateUrl: './view-internal-external.component.html',
  styleUrls: ['./view-internal-external.component.css']
})
export class ViewInternalExternalComponent implements OnInit {
//   displayedColumns: string[] = ['date', 'par-score','promotion','salary-increment','remarks'];

//   parHistory = [
//     {'date':'2018-12-10','parscore':'5','promotion':'HR','salaryincrement':'yes','remarks':'good'},
//     {'date':'2018-11-11','parscore':'2','promotion':'HR','salaryincrement':'NO','remarks':'bad'}
// ]

  
  // dataSource = new MatTableDataSource<any>(this.parHistory);


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource<any>(this.parHistory);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
 // }

}

