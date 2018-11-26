import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-view-district',
  templateUrl: './view-district.component.html',
  styleUrls: ['./view-district.component.css']
})
export class ViewDistrictComponent implements OnInit {

  displayedColumns: string[] = ['d_id','d_name','d_button'];

  district = [
    { 'd_id':'1','d_name':'abc','d_button':' '}
  
  ]
  dataSource = new MatTableDataSource<any>(this.district);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.district);
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