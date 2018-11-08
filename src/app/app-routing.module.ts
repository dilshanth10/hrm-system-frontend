import { CareerDevelopmentPlanComponent } from './pages/employee/employee-management/career-development-plan/career-development-plan.component';
import { RemunerationComponent } from './pages/employee/employee-management/remuneration/remuneration.component';
import { LeaveManagementComponent } from './pages/employee/leave-management/leave-management.component';
import { RecruitmentComponent } from './pages/employee/recruitment/recruitment.component';
import { PromotionComponent } from './pages/employee/employee-management/promotion/promotion.component';
import { AppointmentComponent } from './pages/employee/employee-management/appointment/appointment.component';
import { AppointmentDetailsComponent } from './pages/employee/employee-management/appointment/appointment-details/appointment-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { AgrementLetterComponent } from './pages/employee/employee-management/appointment/provide-offer-letter/agrement-letter/agrement-letter.component';
import { ProvideOfferLetterComponent } from './pages/employee/employee-management/appointment/provide-offer-letter/provide-offer-letter.component';
import { SearchDirectoryComponent } from './pages/employee/employee-management/directory/search-directory/search-directory.component';
import { ExperienceComponent } from './pages/employee/employee-management/experience/experience.component';
import { ParComponent } from './pages/employee/employee-management/par/par.component';
import { ProfileComponent } from './pages/employee/employee-management/profile/profile.component';
import { WelfareComponent } from './pages/employee/welfare/welfare.component';
import { SelfServiceComponent } from './pages/employee/self-service/self-service.component';
import { TerminationComponent } from './pages/employee/employee-management/termination/termination.component';

const appRoutes: Routes = [
  // { path: '**', component: ProvideOfferLetterComponent},
  { path: 'agrementletter', component: AgrementLetterComponent },
  // { path: 'profile', component: profilec}
  { path: 'searchdirectory', component: SearchDirectoryComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'appointment', component: AppointmentComponent},
  { path: 'par', component: ParComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'promotion', component: PromotionComponent},
  { path: 'recruitment', component: RecruitmentComponent},
  { path: 'leavemanagement', component: LeaveManagementComponent},
  { path: 'welfare', component: WelfareComponent},
  { path: 'selfservice', component: SelfServiceComponent},
  { path: 'termination', component: TerminationComponent},
  { path: 'remuneration', component: RemunerationComponent},
  { path: 'careerdevelopment', component: CareerDevelopmentPlanComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
