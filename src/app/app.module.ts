import { CreateWelfareEventComponent } from './pages/employee/welfare/create-welfare-event.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlatpickrModule } from 'angularx-flatpickr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { LeaveHistoryComponent } from './pages/employee/leave/leave-history/leave-history.component';
import { StatisticComponent } from './pages/employee/leave/statistic/statistic.component';
import { LeaveComponent } from './pages/employee/leave/leave.component';
import { RequestLeaveComponent } from './pages/employee/leave/request-leave/request-leave.component';
import {MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatPaginatorModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './pages/employee/leave/request-leave/modal/add/add.component';
import { DeleteComponent } from './pages/employee/leave/request-leave/modal/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { GeneralInformationComponent } from './pages/employee/employee-management/profile/general-information/general-information.component';
import { AcademicQualificationComponent } from './pages/employee/employee-management/profile/academic-qualification/academic-qualification.component';
import { ProfessionalQualificationComponent } from './pages/employee/employee-management/profile/professional-qualification/professional-qualification.component';
import { RecordOfEmploymentComponent } from './pages/employee/employee-management/profile/record-of-employment/record-of-employment.component';
import { RefereesComponent } from './pages/employee/employee-management/profile/referees/referees.component';
import { AttachmentChecklistComponent } from './pages/employee/employee-management/profile/attachment-checklist/attachment-checklist.component';
import { RolesAndResponsibilitiesComponent } from './pages/employee/employee-management/profile/roles-and-responsibilities/roles-and-responsibilities.component';
import { SearchDirectoryComponent } from './pages/employee/employee-management/directory/search-directory/search-directory.component';
import { PromotionHistoryComponent } from './pages/employee/employee-management/promotion/promotion-history/promotion-history.component';
import { InsertPromotionHistoryComponent } from './pages/employee/employee-management/promotion/insert-promotion-history/insert-promotion-history.component';
import { ExLetterRequestHistoryComponent } from './pages/employee/employee-management/experience/ex-letter-request-history/ex-letter-request-history.component';
import { RequestExperienceLetterComponent } from './pages/employee/employee-management/experience/request-experience-letter/request-experience-letter.component';
import { GenerateExperienceLetterComponent } from './pages/employee/employee-management/experience/generate-experience-letter/generate-experience-letter.component';
import { ScheduleParDiscussionComponent } from './pages/employee/employee-management/par/schedule-par-discussion/schedule-par-discussion.component';
import { ParHistoryComponent } from './pages/employee/employee-management/par/par-history/par-history.component';
import { LatestParComponent } from './pages/employee/employee-management/par/latest-par/latest-par.component';
import { UpcomingParComponent } from './pages/employee/employee-management/par/upcoming-par/upcoming-par.component';
import { ScheduleNewParComponent } from './pages/employee/employee-management/par/schedule-new-par/schedule-new-par.component';
import { ParTemplateComponent } from './pages/employee/employee-management/par/par-template/par-template.component';
import { TrackParComponent } from './pages/employee/employee-management/par/track-par/track-par.component';
import { EnterParReviewOutcomeComponent } from './pages/employee/employee-management/par/enter-par-review-outcome/enter-par-review-outcome.component';
import { AppointmentDetailsComponent } from './pages/employee/employee-management/appointment/appointment-details/appointment-details.component';
import { NewAppointmentProfileInformationComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-information/new-appointment-profile-information.component';
import { NewAppointmentProfileAttachmentComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-attachment/new-appointment-profile-attachment.component';
import { AssignRolesAndResponsibilitiesComponent } from './pages/employee/employee-management/appointment/assign-roles-and-responsibilities/assign-roles-and-responsibilities.component';
import { ProvideOfferLetterComponent } from './pages/employee/employee-management/appointment/provide-offer-letter/provide-offer-letter.component';
import { RequsetLoginCerdentialComponent } from './pages/employee/employee-management/appointment/requset-login-cerdential/requset-login-cerdential.component';
import { AddScheduleParDiscussionComponent } from './pages/employee/employee-management/par/schedule-par-discussion/add/add-schedule-par-discussion/add-schedule-par-discussion.component';
import { AgrementLetterComponent } from './pages/employee/employee-management/appointment/provide-offer-letter/agrement-letter/agrement-letter.component';
import { ConfigParComponent } from './pages/employee/employee-management/par/schedule-new-par/config-par/config-par.component';
import { ExperienceComponent } from './pages/employee/employee-management/experience/experience.component';
import { AppointmentComponent } from './pages/employee/employee-management/appointment/appointment.component';
import { ParComponent } from './pages/employee/employee-management/par/par.component';
import { ProfileComponent } from './pages/employee/employee-management/profile/profile.component';
import { PromotionComponent } from './pages/employee/employee-management/promotion/promotion.component';
import { RecruitmentComponent } from './pages/employee/recruitment/recruitment.component';
import { WelfareComponent } from './pages/employee/welfare/welfare.component';
import { TerminationComponent } from './pages/employee/employee-management/termination/termination.component';
import { RemunerationComponent } from './pages/employee/employee-management/remuneration/remuneration.component';
import { CareerDevelopmentPlanComponent } from './pages/employee/employee-management/career-development-plan/career-development-plan.component';
import { LeaveManagementComponent } from './pages/employee/leave-management/leave-management.component';
import { SelfServiceComponent } from './pages/employee/self-service/self-service.component';
import { AddLoanComponent } from './pages/employee/employee-management/remuneration/Loan/add-loan/add-loan.component';
import { EditLoanComponent } from './pages/employee/employee-management/remuneration/Loan/edit-loan/edit-loan.component';
import { ViewLoanComponent } from './pages/employee/employee-management/remuneration/Loan/view-loan/view-loan.component';
import { TakenHrViewLoanComponent } from './pages/employee/employee-management/remuneration/Loan/taken-hr-view-loan/taken-hr-view-loan.component';
import { TakenEmpViewLoanComponent } from './pages/employee/employee-management/remuneration/Loan/taken-emp-view-loan/taken-emp-view-loan.component';
import { AvailableEmpViewLoanComponent } from './pages/employee/employee-management/remuneration/Loan/available-emp-view-loan/available-emp-view-loan.component';

import { TerminationHistoryComponent } from './pages/employee/employee-management/termination/termination-history/termination-history.component';
import { AddTerminationRecordsComponent } from './pages/employee/employee-management/termination/add-termination-records/add-termination-records.component';
import { RequestTerminationEmployeeComponent } from './pages/employee/employee-management/termination/request-termination-employee/request-termination-employee.component';
import { TerminationRequestComponent } from './pages/employee/employee-management/termination/termination-request/termination-request.component';
import { PlanVacanciesComponent } from './pages/employee/recruitment/plan-vacancies/plan-vacancies.component';
import { JobRoleTemplateComponent } from './pages/employee/recruitment/job-role-template/job-role-template.component';
import { RecordOfApplicantComponent } from './pages/employee/recruitment/record-of-applicant/record-of-applicant.component';
import { GenerateJobRoleComponent } from './pages/employee/recruitment/job-role-template/model/generate-job-role/generate-job-role.component';
import { ViewPlanVacanciesComponent } from './pages/employee/recruitment/plan-vacancies/model/view-plan-vacancies/view-plan-vacancies.component';
import { EditPlanVacanciesComponent } from './pages/employee/recruitment/plan-vacancies/model/edit-plan-vacancies/edit-plan-vacancies.component';
import { EditRecordOfApplicantComponent } from './pages/employee/recruitment/record-of-applicant/model/edit-record-of-applicant/edit-record-of-applicant.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    RequestLeaveComponent,
    LeaveHistoryComponent,
    StatisticComponent,
    LeaveComponent,
    AddComponent,
    DeleteComponent,
    GeneralInformationComponent,
    AcademicQualificationComponent,
    ProfessionalQualificationComponent,
    RecordOfEmploymentComponent,
    RefereesComponent,
    AttachmentChecklistComponent,
    RolesAndResponsibilitiesComponent,
    SearchDirectoryComponent,
    PromotionHistoryComponent,
    InsertPromotionHistoryComponent,
    ExLetterRequestHistoryComponent,
    RequestExperienceLetterComponent,
    GenerateExperienceLetterComponent,
    ScheduleParDiscussionComponent,
    ParHistoryComponent,
    LatestParComponent,
    UpcomingParComponent,
    ScheduleNewParComponent,
    ParTemplateComponent,
    TrackParComponent,
    EnterParReviewOutcomeComponent,
    AppointmentDetailsComponent,
    NewAppointmentProfileInformationComponent,
    NewAppointmentProfileAttachmentComponent,
    AssignRolesAndResponsibilitiesComponent,
    ProvideOfferLetterComponent,
    RequsetLoginCerdentialComponent,
    AddScheduleParDiscussionComponent,
    AgrementLetterComponent,
    ConfigParComponent,
    ExperienceComponent,
    AppointmentComponent,
    ParComponent,
    ProfileComponent,
    PromotionComponent,
    RecruitmentComponent,
    WelfareComponent,
    TerminationComponent,
    RemunerationComponent,
    CareerDevelopmentPlanComponent,
    LeaveManagementComponent,
    SelfServiceComponent,
    AddLoanComponent,
    EditLoanComponent,
    ViewLoanComponent,
    TakenHrViewLoanComponent,
    TakenEmpViewLoanComponent,
    AvailableEmpViewLoanComponent,
    TerminationHistoryComponent,
    AddTerminationRecordsComponent,
    RequestTerminationEmployeeComponent,
    TerminationRequestComponent,
    CreateWelfareEventComponent,
    PlanVacanciesComponent,
    JobRoleTemplateComponent,
    RecordOfApplicantComponent,
    GenerateJobRoleComponent,
    ViewPlanVacanciesComponent,
    EditPlanVacanciesComponent,
    EditRecordOfApplicantComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    HttpClientModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    FlatpickrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
