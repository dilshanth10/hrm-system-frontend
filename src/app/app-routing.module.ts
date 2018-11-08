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
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
