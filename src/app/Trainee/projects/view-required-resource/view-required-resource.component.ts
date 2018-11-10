import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-required-resource',
  templateUrl: './view-required-resource.component.html',
  styleUrls: ['./view-required-resource.component.css']
})
export class ViewRequiredResourceComponent implements OnInit {

  displayedColumns: string[] = ['resourceName', 'attachment','delete'];
  attachments = [
    { 'resourceName':'FRS', 'attachment':'','edit/delete':'' },
    { 'resourceName':'High Level Diagram', 'attachment':'','delete':'' },
    { 'resourceName':'DB Schema', 'attachment':'','delete':''}
  ]
  dataSource = new MatTableDataSource<any>(this.attachments);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.attachments);
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
