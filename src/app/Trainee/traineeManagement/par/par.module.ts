import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParComponent } from './par.component';
import { ParScheduleComponent } from './par-schedule/par-schedule.component';
import { ParHistoryComponent } from './par-history/par-history.component';

import {RouterModule,Routes} from '@angular/router';


import { FormsModule } from '@angular/forms';
import { MaterialModuleModule } from 'src/app/material-module.module';
<<<<<<< HEAD
import { ParReviewComponent } from './par-review/par-review.component';
=======
import { SheduleParDiscussionComponent } from './par-schedule/shedule-par-discussion/shedule-par-discussion.component';
import { ScheduleNewParComponent } from './schedule-new-par/schedule-new-par.component';
import { ConfigParComponent } from './par-schedule/config-par/config-par.component';
>>>>>>> d4bc67786164d413254ba8be6b3027f5cd727e66
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
<<<<<<< HEAD
  declarations: [ParComponent, ParScheduleComponent, ParHistoryComponent, ParReviewComponent]
=======
  declarations: [ParComponent, ParScheduleComponent, ParHistoryComponent, ScheduleNewParComponent, ConfigParComponent,SheduleParDiscussionComponent]
>>>>>>> d4bc67786164d413254ba8be6b3027f5cd727e66
})
export class ParModule { }
