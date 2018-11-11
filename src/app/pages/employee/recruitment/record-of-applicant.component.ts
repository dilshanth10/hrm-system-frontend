import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-record-of-applicant',
  templateUrl: './record-of-applicant.component.html',
  styleUrls: ['./record-of-applicant.component.css']
})
export class RecordOfApplicantComponent implements OnInit {
  displayedColumns: string[] = ['v_name', 'v_nic','v_dob','v_age','v_qualification','v_location','v_post','v_cv','v_edit','v_delete'];

  records = [
    { 'v_name':'name1', 'v_nic':'1','v_dob':'5.5.2005','v_age':'15','v_qualification':'abc','v_location':'pqr','v_post':'sss','v_cv':'','v_edit':'Edit','v_delete':'Delete'}
  
  ]
  dataSource = new MatTableDataSource<any>(this.records);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.records);
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
