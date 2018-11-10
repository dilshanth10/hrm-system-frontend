import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParComponent } from './par.component';
import { ParScheduleComponent } from './par-schedule/par-schedule.component';
import { ParHistoryComponent } from './par-history/par-history.component';

import {RouterModule,Routes} from '@angular/router';


import { FormsModule } from '@angular/forms';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { ParReviewComponent } from './par-review/par-review.component';

import { SheduleParDiscussionComponent } from './par-schedule/shedule-par-discussion/shedule-par-discussion.component';
import { ScheduleNewParComponent } from './schedule-new-par/schedule-new-par.component';
import { ConfigParComponent } from './par-schedule/config-par/config-par.component';
import { YourUpcomingParComponent } from './your-upcoming-par/your-upcoming-par.component';
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


  declarations: [ParComponent, ParScheduleComponent, ParHistoryComponent, ParReviewComponent, YourUpcomingParComponent,ScheduleNewParComponent,ConfigParComponent,SheduleParDiscussionComponent]

})
export class ParModule { }
