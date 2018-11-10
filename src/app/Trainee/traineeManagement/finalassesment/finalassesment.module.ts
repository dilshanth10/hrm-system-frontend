import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalAssessmentComponent } from './final-assessment.component';
import {RouterModule,Routes} from '@angular/router';
const routes:Routes=[
{
  path:'',
  component:FinalAssessmentComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinalAssessmentComponent]
})
export class FinalassesmentModule { }
