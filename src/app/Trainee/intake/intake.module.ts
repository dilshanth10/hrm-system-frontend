import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntakeComponent } from './intake.component';
import {RouterModule,Routes} from '@angular/router';
const routes:Routes=[
  {
    path:'',
    component:IntakeComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IntakeComponent]
})
export class IntakeModule { }
