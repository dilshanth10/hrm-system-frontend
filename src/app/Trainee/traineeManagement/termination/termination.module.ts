import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminationComponent } from './termination.component';
import {RouterModule,Routes} from '@angular/router';
import { TraineeRequestTerminationComponent } from './trainee-request-termination/trainee-request-termination.component';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { ViewTerminationHistoryComponent } from './termination-history/view-termination-history/view-termination-history.component';
import { AddTerminationHistoryComponent } from './termination-history/add-termination-history/add-termination-history.component';
import { EditTerminationHistoryComponent } from './termination-history/edit-termination-history/edit-termination-history.component';
import { DeleteTerminationHistoryComponent } from './termination-history/delete-termination-history/delete-termination-history.component';
import { FlatpickrModule } from 'angularx-flatpickr';

const routes:Routes=[
  {
    path:'',
    component:TerminationComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FlatpickrModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [TerminationComponent, ViewTerminationHistoryComponent, AddTerminationHistoryComponent, EditTerminationHistoryComponent, DeleteTerminationHistoryComponent, TraineeRequestTerminationComponent]
})
export class TerminationModule { }
