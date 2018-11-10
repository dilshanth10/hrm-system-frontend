import { CareerDevelopmentPlanComponent } from './pages/employee/employee-management/career-development-plan/career-development-plan.component';
import { RemunerationComponent } from './pages/employee/employee-management/remuneration/remuneration.component';
import { LeaveManagementComponent } from './pages/employee/leave-management/leave-management.component';
import { RecruitmentComponent } from './pages/employee/recruitment/recruitment.component';
import { PromotionComponent } from './pages/employee/employee-management/promotion/promotion.component';
import { AppointmentComponent } from './pages/employee/employee-management/appointment/appointment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgrementLetterComponent } from './pages/employee/employee-management/appointment/provide-offer-letter/agrement-letter/agrement-letter.component';
import { SearchDirectoryComponent } from './pages/employee/employee-management/directory/search-directory/search-directory.component';
import { ExperienceComponent } from './pages/employee/employee-management/experience/experience.component';
import { ParComponent } from './pages/employee/employee-management/par/par.component';
import { ProfileComponent } from './pages/employee/employee-management/profile/profile.component';
import { WelfareComponent } from './pages/employee/welfare/welfare.component';
import { SelfServiceComponent } from './pages/employee/self-service/self-service.component';
import { TerminationComponent } from './pages/employee/employee-management/termination/termination.component';
import { GeneralInformationComponent } from './pages/employee/employee-management/profile/general-information/general-information.component';
import { ProfessionalQualificationComponent } from './pages/employee/employee-management/profile/professional-qualification/professional-qualification.component';
import { RolesAndResponsibilitiesComponent } from './pages/employee/employee-management/profile/roles-and-responsibilities/roles-and-responsibilities.component';
import { RefereesComponent } from './pages/employee/employee-management/profile/referees/referees.component';
import { RecordOfEmploymentComponent } from './pages/employee/employee-management/profile/record-of-employment/record-of-employment.component';
import { AttachmentChecklistComponent } from './pages/employee/employee-management/profile/attachment-checklist/attachment-checklist.component';
import { AcademicQualificationComponent } from './pages/employee/employee-management/profile/academic-qualification/academic-qualification.component';
import { EmpProfileComponent } from './pages/employee/employee-management/profile/emp-profile/emp-profile.component';
import { NewAppointmentProfileInformationComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-information/new-appointment-profile-information.component';
import { AppointGeneralInformationComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-information/appoint-general-information/appoint-general-information.component';
import { AppointAcademicQualificationComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-information/appoint-academic-qualification/appoint-academic-qualification.component';
import { AppointProfessionalQualificationComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-information/appoint-professional-qualification/appoint-professional-qualification.component';
import { AppointRecordOfEmploymentComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-information/appoint-record-of-employment/appoint-record-of-employment.component';
import { AppointRefereesComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-information/appoint-referees/appoint-referees.component';
import { NewAppointmentProfileAttachmentComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-attachment/new-appointment-profile-attachment.component';
import { RequsetLoginCerdentialComponent } from './pages/employee/employee-management/appointment/requset-login-cerdential/requset-login-cerdential.component';
import { AssignRolesAndResponsibilitiesComponent } from './pages/employee/employee-management/appointment/assign-roles-and-responsibilities/assign-roles-and-responsibilities.component';
import { AppointmentDetailsComponent } from './pages/employee/employee-management/appointment/appointment-details/appointment-details.component';
import { ProvideOfferLetterComponent } from './pages/employee/employee-management/appointment/provide-offer-letter/provide-offer-letter.component';

const appRoutes: Routes = [
  // { path: '**', component: ProvideOfferLetterComponent},
  { path: 'agrementletter', component: AgrementLetterComponent },
  // { path: 'profile', component: profilec}
  { path: 'searchdirectory', component: SearchDirectoryComponent },
  { path: 'experience', component: ExperienceComponent },
  {
    path: 'appointment', component: AppointmentComponent,
    children: [
      { path: 'appointmentDetails', component: AppointmentDetailsComponent },
      {
        path: 'appointmentAdd', component: NewAppointmentProfileInformationComponent,
        children: [
          { path: 'generalInfo', component: AppointGeneralInformationComponent },
          { path: 'academicInfo', component: AppointAcademicQualificationComponent },
          { path: 'professionalQualification', component: AppointProfessionalQualificationComponent },
          { path: 'recordOfEmp', component: AppointRecordOfEmploymentComponent },
          { path: 'referees', component: AppointRefereesComponent },
          { path: 'appointmentAddAttach', component: NewAppointmentProfileAttachmentComponent }
        ]
      },
      
      { path: 'appointmentProvide', component: ProvideOfferLetterComponent },
      { path: 'appointmentAssign', component: AssignRolesAndResponsibilitiesComponent },
      { path: 'appointmentReguestLogIN', component: RequsetLoginCerdentialComponent },
      

    ]


  },
  { path: 'par', component: ParComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: 'recruitment', component: RecruitmentComponent },
  { path: 'leavemanagement', component: LeaveManagementComponent },
  { path: 'welfare', component: WelfareComponent },
  { path: 'selfservice', component: SelfServiceComponent },
  { path: 'termination', component: TerminationComponent },
  { path: 'remuneration', component: RemunerationComponent },
  { path: 'careerdevelopment', component: CareerDevelopmentPlanComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
