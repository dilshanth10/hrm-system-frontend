import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'profile',
    loadChildren: './modules/profiles/view-profile-info/view-profile-info.module#ViewProfileInfoModule'
  },
  {
    path: 'selection',
    loadChildren: './modules/profiles/add-profile-info/add-profile-info.module#AddProfileInfoModule'
  },
  {
    path: 'remuneration',
    loadChildren: './modules/employee/remuneration/remuneration.module#RemunerationModule'
  },
  {
    path: 'par',
    loadChildren: './modules/par/par.module#ParModule'
  },
  {
    path: 'skilldevelopmentplan',
    loadChildren: './modules/trainee/traineeManagement/skilldevelopmentplan/skilldevelopmentplan.module#SkilldevelopmentplanModule'
  },
  {
    path: 'courserecord',
    loadChildren: './modules/trainee/traineeManagement/course-record/course-record.module#CourseRecordModule'
  },
  {
    path: 'attendance',
    loadChildren: './modules/trainee/traineeManagement/attendance/attendance.module#AttendanceModule'
  },
  {
    path: 'finalassesment',
    loadChildren: './modules/trainee/traineeManagement/finalassesment/finalassesment.module#FinalassesmentModule'
  },
  {
    path: 'termination',
    loadChildren: './modules/trainee/traineeManagement/termination/termination.module#TerminationModule'
  },
  {
    path: 'notifications',
    loadChildren: './modules/trainee/notifications/notifications.module#NotificationsModule'
  },
  {
    path: 'projects',
    loadChildren: './modules/trainee/projects/projects.module#ProjectsModule'
  },
  {
    path: 'assignments',
    loadChildren: './modules/trainee/assignments/assignments.module#AssignmentsModule'
  },
  {
    path: 'intake',
    loadChildren: './modules/trainee/intake/intake.module#IntakeModule'
  },
  {
    path: 'posting',
    loadChildren: './modules/trainee/posting/posting.module#PostingModule'
  },
  {
    path: 'selfservice',
    loadChildren: './modules/trainee/self-service/self-service.module#SelfServiceModule'
  },
  {
    path: 'schedule',
    loadChildren: './modules/trainee/schedule/schedule.module#ScheduleModule'
  },
  {
    path: 'trainermanagement',
    loadChildren: './modules/trainer/trainer-management/trainer-management.module#TrainerManagementModule'
  },

  {
    path: 'trainerselfservice',
    loadChildren: './modules/trainer/trainer-self-service/trainer-self-service.module#TrainerSelfServiceModule'
  }


]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
