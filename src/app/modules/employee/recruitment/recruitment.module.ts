import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentComponent } from './recruitment.component';
import { InterviewHistoryComponent } from './interview-history/interview-history.component';
import { AddInterviewHistoryComponent } from './interview-history/add-interview-history/add-interview-history.component';
import { Routes, RouterModule } from '@angular/router';
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
  declarations: [RecruitmentComponent, InterviewHistoryComponent, AddInterviewHistoryComponent]
})
export class RecruitmentModule { }
