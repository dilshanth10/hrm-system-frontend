import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParComponent } from './par.component';
import { ParScheduleComponent } from './par-schedule/par-schedule.component';
import { ParHistoryComponent } from './par-history/par-history.component';

import {RouterModule,Routes} from '@angular/router';


import { FormsModule } from '@angular/forms';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { ParReviewComponent } from './par-review/par-review.component';
const routes:Routes=[
{
  path:'',
  component:ParComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParComponent, ParScheduleComponent, ParHistoryComponent, ParReviewComponent]
})
export class ParModule { }
