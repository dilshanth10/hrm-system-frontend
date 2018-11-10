import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-professional-qualification',
  templateUrl: './professional-qualification.component.html',
  styleUrls: ['./professional-qualification.component.css']
})
export class ProfessionalQualificationComponent implements OnInit {
  
  displayedColumns: string[] = ['type','fyear','tyear', 'name','subject','grade'];

  professional = [
    { 'type':'Professional Qualification','fyear':'1', 'tyear':'1','name':'School1','subject':'Subject1', 'grade':'A' },
    { 'type':'Professional Qualification','fyear':'2','tyear':'1', 'name':'School2','subject':'Subject2', 'grade':'B' },
   
  ]
  dataSource = new MatTableDataSource<any>(this.professional);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.professional);
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
