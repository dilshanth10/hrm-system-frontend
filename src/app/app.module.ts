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
import { StatisticComponent } from './pages/employee/leave/statistic/statistic.component';
import { LeaveComponent } from './pages/employee/leave/leave.component';
import { RequestLeaveComponent } from './pages/employee/leave/request-leave/request-leave.component';
import {MatSelectModule, MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatPaginatorModule, MatCheckboxModule, MatRadioModule} from '@angular/material';
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
import { InterviewHistoryComponent } from './pages/employee/recruitment/interview-history/interview-history.component';
import { AddApplicantsComponent } from './pages/employee/recruitment/interview-history/Models/add-applicants/add-applicants.component';
import { RejectApplicantsComponent } from './pages/employee/recruitment/interview-history/Models/reject-applicants/reject-applicants.component';
import { AddInterviewersComponent } from './pages/employee/recruitment/interview-history/Models/add-interviwers/add-interviewers.component';
import { TableEditableComponent } from './pages/employee/recruitment/table-editable/table-editable.component';
import { AddInterviewPaneldetailsComponent } from './pages/employee/recruitment/interview-history/add-interview-paneldetails/add-interview-paneldetails.component';
import { ViewInternalExternalComponent } from './pages/employee/recruitment/interview-history/view-interview-historynew/Model/view-internal-external/view-internal-external.component';
import { ViewInterviewHistoryInterviewdetailsComponent } from './pages/employee/recruitment/interview-history/view-interview-history-interviewdetails/view-interview-history-interviewdetails.component';
import { ViewInterviewHistoryInterviewpanelComponent } from './pages/employee/recruitment/interview-history/view-interview-history-interviewpanel/view-interview-history-interviewpanel.component';
import { ViewInterviewPaneldetailsComponent } from './pages/employee/recruitment/interview-history/view-interview-paneldetails/view-interview-paneldetails.component';
import { AddCareerDevelopmentPlanComponent } from './pages/employee/employee-management/career-development-plan/add-career-development-plan/add-career-development-plan.component';
import { ViewCareerDevelopmentPlanComponent } from './pages/employee/employee-management/career-development-plan/view-career-development-plan/view-career-development-plan.component';
import { EditCareerDevelopmentPlanComponent } from './pages/employee/employee-management/career-development-plan/edit-career-development-plan/edit-career-development-plan.component';
import { DeleteCareerDevelopmentPlanComponent } from './pages/employee/employee-management/career-development-plan/delete-career-development-plan/delete-career-development-plan.component';
import { EmployeeViewCareerDevelopmentPlanComponent } from './pages/employee/employee-management/career-development-plan/employee-view-career-development-plan/employee-view-career-development-plan.component';
import { TableViewComponent } from './pages/employee/employee-management/career-development-plan/table-view/table-view.component';
import { EmployeeAddCareerGoalsComponent } from './pages/employee/employee-management/career-development-plan/employee-add-career-goals/employee-add-career-goals.component';
import { AddLoanComponent } from './pages/employee/employee-management/remuneration/Loan/add-loan/add-loan.component';
import { EditLoanComponent } from './pages/employee/employee-management/remuneration/Loan/edit-loan/edit-loan.component';
import { ViewLoanComponent } from './pages/employee/employee-management/remuneration/Loan/view-loan/view-loan.component';
import { AppointAcademicQualificationComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-information/appoint-academic-qualification/appoint-academic-qualification.component';
import { AppointGeneralInformationComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-information/appoint-general-information/appoint-general-information.component';
import { AppointProfessionalQualificationComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-information/appoint-professional-qualification/appoint-professional-qualification.component';
import { AppointRecordOfEmploymentComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-information/appoint-record-of-employment/appoint-record-of-employment.component';
import { AppointRefereesComponent } from './pages/employee/employee-management/appointment/new-appointment-profile-information/appoint-referees/appoint-referees.component';

import { EmployeeOwnHistoryComponent } from './pages/employee/self-service/employee-own-history/employee-own-history.component';
import { EmployeeComplainComponent } from './pages/employee/self-service/employee-complain/employee-complain.component';
import { HRViewAllComponent } from './pages/employee/self-service/hr-view-all/hr-view-all.component';
import { HRViewComponent } from './pages/employee/self-service/hr-view/hr-view.component';
import { EmpExLetterViewHistoryComponent } from './pages/employee/employee-management/experience/emp-ex-letter-view-history/emp-ex-letter-view-history.component';
import { TerminationHistoryComponent } from './pages/employee/employee-management/termination/termination-history/termination-history.component';
import { AddTerminationRecordsComponent } from './pages/employee/employee-management/termination/add-termination-records/add-termination-records.component';
import { RequestTerminationEmployeeComponent } from './pages/employee/employee-management/termination/request-termination-employee/request-termination-employee.component';
import { TerminationRequestComponent } from './pages/employee/employee-management/termination/termination-request/termination-request.component';
import { PlanVacanciesComponent } from './pages/employee/recruitment/plan-vacancies/plan-vacancies.component';
import { JobRoleTemplateComponent } from './pages/employee/recruitment/job-role-template/job-role-template.component';
import { GenerateJobRoleComponent } from './pages/employee/recruitment/job-role-template/model/generate-job-role/generate-job-role.component';
import { ViewPlanVacanciesComponent } from './pages/employee/recruitment/plan-vacancies/model/view-plan-vacancies/view-plan-vacancies.component';
import { EditPlanVacanciesComponent } from './pages/employee/recruitment/plan-vacancies/model/edit-plan-vacancies/edit-plan-vacancies.component';
import { EditRecordOfApplicantComponent } from './pages/employee/recruitment/record-of-applicant/model/edit-record-of-applicant/edit-record-of-applicant.component';

import { IndivualWelfareComponent } from './pages/employee/welfare/indivual-welfare/indivual-welfare.component';
import { AddAllowanceComponent } from './pages/employee/welfare/indivual-welfare/add-allowance/add-allowance.component';
import { ViewWelfareEventComponent } from './pages/employee/welfare/view-welfare-event/view-welfare-event.component';
import { CarryForawardLeaveRequestComponent } from './pages/employee/leave-management/carry-foraward-leave-request/carry-foraward-leave-request.component';
import { CarryForwardLeaveComponent } from './pages/employee/leave-management/carry-forward-leave/carry-forward-leave.component';
import { TakenViewByHrComponent } from './pages/employee/employee-management/remuneration/Loan/taken-view-by-hr/taken-view-by-hr.component';
import { AvilableLoanViewByEmpComponent } from './pages/employee/employee-management/remuneration/Loan/avilable-loan-view-by-emp/avilable-loan-view-by-emp.component';
import { TakenViewByEmpComponent } from './pages/employee/employee-management/remuneration/Loan/taken-view-by-emp/taken-view-by-emp.component';
import { EligibleLoanComponent } from './pages/employee/employee-management/remuneration/Loan/eligible-loan/eligible-loan.component';
import { ViewSalaryChartComponent } from './pages/employee/employee-management/remuneration/salary-chart/view-salary-chart/view-salary-chart.component';
import { ViewAllowancesComponent } from './pages/employee/employee-management/remuneration/benefits-allowances/view-allowances/view-allowances.component';
import { CreateSalaryChatComponent } from './pages/employee/employee-management/remuneration/salary-chart/create-salary-chat/create-salary-chat.component';
import { EditSalaryChatComponent } from './pages/employee/employee-management/remuneration/salary-chart/edit-salary-chat/edit-salary-chat.component';
import { CreateAllowancwesComponent } from './pages/employee/employee-management/remuneration/benefits-allowances/create-allowancwes/create-allowancwes.component';
import { EditAllowancwesComponent } from './pages/employee/employee-management/remuneration/benefits-allowances/edit-allowancwes/edit-allowancwes.component';
import { ExperienceLetterTemplateComponent } from './pages/employee/employee-management/experience/generate-experience-letter/experience-letter-template/experience-letter-template.component';
import { HrResponseViewComponent } from './pages/employee/self-service/hr-response-view/hr-response-view.component';
import { AddresponseComponent } from './pages/employee/self-service/addresponse/addresponse.component';
import { ViewemployeedetailsComponent } from './pages/employee/self-service/viewemployeedetails/viewemployeedetails.component';
import { WelfareUsageHistoryComponent } from './pages/employee/welfare/welfare-usage-history/welfare-usage-history.component';
import { EditWelfareEventComponent } from './pages/employee/welfare/view-welfare-event/edit-welfare-event/edit-welfare-event.component';
import { DeleteWelfareEventComponent } from './pages/employee/welfare/view-welfare-event/delete-welfare-event/delete-welfare-event.component';
import { EditWelfareUsageComponent } from './pages/employee/welfare/welfare-usage-history/edit-welfare-usage/edit-welfare-usage.component';
import { DeleteWelfareUsageComponent } from './pages/employee/welfare/welfare-usage-history/delete-welfare-usage/delete-welfare-usage.component';
import { GeneralWelfareComponent } from './pages/employee/welfare/general-welfare/general-welfare.component';
import { AddWelfareComponent } from './pages/employee/welfare/general-welfare/add-welfare/add-welfare.component';
import { RecordOfApplicantComponent } from './pages/employee/recruitment/record-of-applicant/record-of-applicant.component';
import { ApplyLeaveComponent } from './pages/employee/leave-management/apply-leave/apply-leave.component';
import { ApproveLeaveComponent } from './pages/employee/leave-management/approve-leave/approve-leave.component';
import { LeaveHistoryComponent} from  './pages/employee/leave-management/leave-history/leave-history.component';
import { AllocateLeaveComponent } from './pages/employee/leave-management/allocate-leave/allocate-leave.component';
import { RejectModalComponent } from './pages/employee/leave-management/approve-leave/reject-modal/reject-modal.component';
import { AcceptModalComponent } from './pages/employee/leave-management/approve-leave/accept-modal/accept-modal.component';
import { CancelModalComponent } from './pages/employee/leave-management/leave-history/cancel-modal/cancel-modal.component';
import { ViewSpecificEmployeesLeaveComponent } from './pages/employee/leave-management/view-specific-employees-leave/view-specific-employees-leave.component';
import { ViewInternalExternalApplicantsComponent } from './pages/employee/recruitment/interview-history/Models/view-internal-external-applicants.component';
import { ViewInternalApplicantsComponent } from './pages/employee/recruitment/interview-history/Models/view-internal-external-applicants/view-internal-applicants.component';
import { InternalExternalModelViewComponent } from './pages/employee/recruitment/interview-history/view-interview-history-interviewdetails/Model/internal-external-model-view/internal-external-model-view.component';
import { AfterInterviewDetailsComponent } from './pages/employee/recruitment/interview-history/Models/after-interview-details/after-interview-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    RequestLeaveComponent,
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
    InterviewHistoryComponent,
    AddApplicantsComponent,
    RejectApplicantsComponent,
    AddInterviewersComponent,
    TableEditableComponent,
    AddInterviewPaneldetailsComponent,
    ViewInternalExternalComponent,
    ViewInterviewHistoryInterviewdetailsComponent,
    ViewInterviewHistoryInterviewpanelComponent,
    ViewInterviewPaneldetailsComponent,
    AddCareerDevelopmentPlanComponent,
    ViewCareerDevelopmentPlanComponent,
    EditCareerDevelopmentPlanComponent,
    DeleteCareerDevelopmentPlanComponent,
    EmployeeViewCareerDevelopmentPlanComponent,
    TableViewComponent,
    EmployeeAddCareerGoalsComponent,
    AddLoanComponent,
    EditLoanComponent,
    ViewLoanComponent,
    AppointAcademicQualificationComponent,
    AppointGeneralInformationComponent,
    AppointProfessionalQualificationComponent,
    AppointRecordOfEmploymentComponent,
    AppointRefereesComponent,
    EmployeeOwnHistoryComponent,
    EmployeeComplainComponent,
    HRViewAllComponent,
    HRViewComponent,
    EmpExLetterViewHistoryComponent,
    PlanVacanciesComponent,
    TerminationHistoryComponent,
    AddTerminationRecordsComponent,
    RequestTerminationEmployeeComponent,
    TerminationRequestComponent,
    CreateWelfareEventComponent,
    PlanVacanciesComponent,
    JobRoleTemplateComponent,
    GenerateJobRoleComponent,
    ViewPlanVacanciesComponent,
    EditPlanVacanciesComponent,
    EditRecordOfApplicantComponent,
    RecordOfApplicantComponent,
    IndivualWelfareComponent,
    AddAllowanceComponent,
    ViewWelfareEventComponent,
    RecordOfApplicantComponent,
    CreateWelfareEventComponent,
    CarryForawardLeaveRequestComponent,
    CarryForwardLeaveComponent,
    CreateWelfareEventComponent,
    TakenViewByEmpComponent,
    TakenViewByHrComponent,
    AvilableLoanViewByEmpComponent,
    EligibleLoanComponent,
    ViewSalaryChartComponent,
    ViewAllowancesComponent,
    CreateSalaryChatComponent,
    EditSalaryChatComponent,
    CreateAllowancwesComponent,
    EditAllowancwesComponent,
    ExperienceLetterTemplateComponent,
    HrResponseViewComponent,
    AddresponseComponent,
    ViewemployeedetailsComponent,
    WelfareUsageHistoryComponent,
    EditWelfareEventComponent,
    DeleteWelfareEventComponent,
    EditWelfareUsageComponent,
    DeleteWelfareUsageComponent,
    GeneralWelfareComponent,
    AddWelfareComponent,
    ApplyLeaveComponent,
    ApproveLeaveComponent,
    LeaveHistoryComponent,
    AllocateLeaveComponent,
    RejectModalComponent,
    AcceptModalComponent,
    CancelModalComponent,    
    ViewSpecificEmployeesLeaveComponent, ViewInternalExternalApplicantsComponent, ViewInternalApplicantsComponent, InternalExternalModelViewComponent, AfterInterviewDetailsComponent,
    
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
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    FlatpickrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
