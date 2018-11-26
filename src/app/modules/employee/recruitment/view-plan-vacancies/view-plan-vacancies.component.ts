import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { PlanVacancyService } from '../Service/plan-vacancy.service';
import { PlanVacancy } from '../Modal/plan-vacancy';

@Component({
  selector: 'app-view-plan-vacancies',
  templateUrl: './view-plan-vacancies.component.html',
  styleUrls: ['./view-plan-vacancies.component.css']
})
export class ViewPlanVacanciesComponent implements OnInit {
  planVacancyObj: PlanVacancy = new PlanVacancy();
  planVacancy: PlanVacancy[];
  EditplanVacancyObj: PlanVacancy = new PlanVacancy();

  displayedColumns: string[] = ['view', 'title', 'referencenumber',  'no', 'department', 'salary',  'button'];

  plan = [
    { 'view':'','title': 'Manager', 'referencenumber': '1',  'no': '2', 'department': 'HR', 'salary': '10000.00',  'button': '' }
  ]
  dataSource = new MatTableDataSource<any>(this.plan);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private planVacancyService: PlanVacancyService) { }

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