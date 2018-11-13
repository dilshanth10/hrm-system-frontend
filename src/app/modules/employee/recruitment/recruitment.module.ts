import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentComponent } from './recruitment.component';
import { JobRoleTemplateComponent } from './job-role-template/job-role-template.component';
import { PlanVacanciesComponent } from './plan-vacancies/plan-vacancies.component';
import { ViewPlanVacanciesComponent } from './view-plan-vacancies/view-plan-vacancies.component';
import { DeleteViewPlanVacanciesComponent } from './view-plan-vacancies/modal/delete-view-plan-vacancies/delete-view-plan-vacancies.component';
import { EditViewPlanVacanciesComponent } from './view-plan-vacancies/modal/edit-view-plan-vacancies/edit-view-plan-vacancies.component';
import { ViewallViewPlanVacanciesComponent } from './view-plan-vacancies/modal/viewall-view-plan-vacancies/viewall-view-plan-vacancies.component';
import { JobRoleTemplateFormComponent } from './job-role-template/modal/job-role-template-form/job-role-template-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';

const routes:Routes=[
  {
    path:'',
   component:RecruitmentComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecruitmentComponent, JobRoleTemplateComponent, PlanVacanciesComponent, ViewPlanVacanciesComponent, DeleteViewPlanVacanciesComponent, EditViewPlanVacanciesComponent, ViewallViewPlanVacanciesComponent, JobRoleTemplateFormComponent]
})
export class RecruitmentModule { }
