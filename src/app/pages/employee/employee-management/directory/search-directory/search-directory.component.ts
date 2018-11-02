import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-search-directory',
  templateUrl: './search-directory.component.html',
  styleUrls: ['./search-directory.component.css']
})

export class SearchDirectoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','address','contact','email','jobtitle','track'];

  Search = [
    { 'id':'1', 'name':'Manager','address':'edrfg', 'contact':'Manager','email':'eew','jobtitle':'gfds','track':'juhytr'},
    { 'id':'2', 'name':'HR','address':'edrfg', 'contact':'wertg','email':'eew','jobtitle':'gfds','track':'juhytr'},
    { 'id':'3', 'name':'Admin','address':'edrfg', 'contact':'466','email':'eew','jobtitle':'gfds','track':'juhytr'},
    { 'id':'4', 'name':'Accounts','address':'edrfg', 'contact':'4552','email':'eew','jobtitle':'gfds','track':'juhytr'},
    { 'id':'5', 'name':'Manager','address':'edrfg', 'contact':'4565','email':'eew','jobtitle':'gfds','track':'juhytr'},
    { 'id':'6', 'name':'Manager','address':'edrfg', 'contact':'Manager','email':'eew','jobtitle':'gfds','track':'juhytr'},
    { 'id':'4', 'name':'Accounts','address':'edrfg', 'contact':'4552','email':'eew','jobtitle':'gfds','track':'juhytr'},
    { 'id':'5', 'name':'Manager','address':'edrfg', 'contact':'4565','email':'eew','jobtitle':'gfds','track':'juhytr'},
    { 'id':'6', 'name':'Manager','address':'edrfg', 'contact':'Manager','email':'eew','jobtitle':'gfds','track':'juhytr'},
  ]
  dataSource = new MatTableDataSource<any>(this.Search);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.Search);
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
