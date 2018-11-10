import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';

import {RouterModule,Routes} from '@angular/router';
import { FormsScheduleComponent } from './forms-schedule/forms-schedule.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
const routes:Routes=[
{
  path:'',
  component:ScheduleComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScheduleComponent, FormsScheduleComponent, ViewScheduleComponent]
})
export class ScheduleModule { }
