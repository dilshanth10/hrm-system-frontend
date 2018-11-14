import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveManagementComponent } from './leave-management.component';
import { CarryForwardLeaveRequestComponent } from './carry-forward-leave-request/carry-forward-leave-request.component';
import { CarryForwardLeaveComponent } from './carry-forward-leave/carry-forward-leave.component';
import {RouterModule,Routes} from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';

const routes:Routes=[
  {
    path:'',
    component:LeaveManagementComponent,

  }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaveManagementComponent, CarryForwardLeaveRequestComponent, CarryForwardLeaveComponent]
})
export class LeaveManagementModule { }
