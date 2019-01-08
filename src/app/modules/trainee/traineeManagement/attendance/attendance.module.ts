import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAttendanceDetailsComponent } from './add-attendance-details/add-attendance-details.component';
import { AttendanceDetailsComponent } from './attendance-details/attendance-details.component';
import { AttendanceComponent } from './attendance.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '', component:AttendanceComponent,
    children: [
      { path: 'addAttendance', component: AddAttendanceDetailsComponent },
     {path:'viewAttendance',component:AttendanceDetailsComponent}
      
    ]
  },
 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [AddAttendanceDetailsComponent, AttendanceDetailsComponent,AttendanceComponent]
})
export class AttendanceModule { }
