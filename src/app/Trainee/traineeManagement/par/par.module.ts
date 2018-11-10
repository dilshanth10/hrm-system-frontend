import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParComponent } from './par.component';
import { ParScheduleComponent } from './par-schedule/par-schedule.component';
import { ParHistoryComponent } from './par-history/par-history.component';

import {RouterModule,Routes} from '@angular/router';


import { FormsModule } from '@angular/forms';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { SheduleParDiscussionComponent } from './par-schedule/shedule-par-discussion/shedule-par-discussion.component';
import { ScheduleNewParComponent } from './schedule-new-par/schedule-new-par.component';
import { ConfigParComponent } from './par-schedule/config-par/config-par.component';
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
  declarations: [ParComponent, ParScheduleComponent, ParHistoryComponent, ScheduleNewParComponent, ConfigParComponent,SheduleParDiscussionComponent]
})
export class ParModule { }
