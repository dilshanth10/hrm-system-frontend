import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import {RouterModule,Routes} from '@angular/router';
import { ScheduleSetupProjectComponent } from './schedule-setup-project/schedule-setup-project.component';

const routes:Routes=[
  {
    path:'',
   component:ProjectsComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectsComponent, ScheduleSetupProjectComponent]
})
export class ProjectsModule { }
