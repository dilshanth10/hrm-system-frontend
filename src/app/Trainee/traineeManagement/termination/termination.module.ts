import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminationComponent } from './termination.component';
import {RouterModule,Routes} from '@angular/router';
import { TraineeRequestTerminationComponent } from './trainee-request-termination/trainee-request-termination.component';

const routes:Routes=[
  {
    path:'',
    component:TerminationComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TerminationComponent, TraineeRequestTerminationComponent]
})
export class TerminationModule { }
