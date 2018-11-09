import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-plan-vacancies',
  templateUrl: './plan-vacancies.component.html',
  styleUrls: ['./plan-vacancies.component.css']
})
export class PlanVacanciesComponent implements OnInit {
  displayedColumns: string[] = ['view', 'title', 'referencenumber',  'no', 'department', 'salary',  'edit', 'delete'];

  plan = [
    { 'view':'','title': 'Manager', 'referencenumber': '1',  'no': '2', 'department': 'HR', 'salary': '10000.00',  'edit': 'Edit', 'delete': 'Delete' }
  ]
  dataSource = new MatTableDataSource<any>(this.plan);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.plan);
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
