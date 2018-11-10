import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminationComponent } from './termination.component';
import {RouterModule,Routes} from '@angular/router';
import { ApproveTerminationComponent } from './approve-termination/approve-termination.component';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { TraineeTerminationAcceptModalComponent } from './approve-termination/trainee-termination-accept-modal/trainee-termination-accept-modal.component';
import { TraineeTerminationRejectModalComponent } from './approve-termination/trainee-termination-reject-modal/trainee-termination-reject-modal.component';
import { FlatpickrModule } from 'angularx-flatpickr';

const routes:Routes=[
  {
    path:'',
    component:TerminationComponent
  }
]
@NgModule({
  imports: [
    MaterialModuleModule,
    CommonModule,
    FlatpickrModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [
    TerminationComponent,
    ApproveTerminationComponent,
    TraineeTerminationAcceptModalComponent,
    TraineeTerminationRejectModalComponent,
    ]
})
export class TerminationModule { }
