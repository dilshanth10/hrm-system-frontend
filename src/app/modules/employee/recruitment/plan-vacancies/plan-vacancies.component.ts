import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-plan-vacancies',
  templateUrl: './plan-vacancies.component.html',
  styleUrls: ['./plan-vacancies.component.css']
})
export class PlanVacanciesComponent implements OnInit {

  planVacancies: FormGroup;

  constructor() {
    this.planVacancies = new FormGroup({
      'jobTitle':new FormControl,
      'refNum':new FormControl,
      'hirOfficer':new FormControl,
      'hirDep':new FormControl,
      'numVacancy':new FormControl,
      'typeRecuitment':new FormControl,
      'salaryScal':new FormControl,
      'scheduleDate':new FormControl,
      'openDate':new FormControl,
      'endDate':new FormControl,
      'keyReq':new FormControl
      })
  }


  ngOnInit() {
  }

}
