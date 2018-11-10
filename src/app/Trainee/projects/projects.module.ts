import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import {RouterModule,Routes} from '@angular/router';
import { ScheduleSetupProjectComponent } from './schedule-setup-project/schedule-setup-project.component';
import { AddRequiredResourceComponent } from './add-required-resource/add-required-resource.component';
import { ViewRequiredResourceComponent } from './view-required-resource/view-required-resource.component';
import { MaterialModuleModule } from 'src/app/material-module.module';

const routes:Routes=[
  {
    path:'',
   component:ProjectsComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectsComponent, ScheduleSetupProjectComponent, AddRequiredResourceComponent, ViewRequiredResourceComponent]
})
export class ProjectsModule { }
