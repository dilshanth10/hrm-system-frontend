import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAcademicQualificationComponent } from './view-academic-qualification/view-academic-qualification.component';
import { ViewAttachmentComponent } from './view-attachment/view-attachment.component';
import { ViewGeneralInfomationComponent } from './view-general-infomation/view-general-infomation.component';
import { ViewProfessionalQualificationComponent } from './view-professional-qualification/view-professional-qualification.component';
import { ViewRecordOfEmploymentComponent } from './view-record-of-employment/view-record-of-employment.component';
import { ViewRefereesComponent } from './view-referees/view-referees.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { ViewRolesAndResposibilitiesComponent } from './view-roles-and-resposibilities/view-roles-and-resposibilities.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule  } from '@angular/common/http';
import { RolesAndResponsibilitiesService } from './view-roles-and-resposibilities/roles-and-responsibilities.service';
import { FormsModule } from '@angular/forms';
import { ViewProfessionalMembershipComponent } from './view-professional-membership/view-professional-membership.component';
import { TraineeProfileTableComponent } from './trainee-profile-table/trainee-profile-table.component';
import { ProfileInfoService } from './trainee-profile-table/profile-info.service';
const routes: Routes = [
  {
    path: 'profile', component: TraineeProfileTableComponent,
  },
  
  {
   path: 'profile/:id', component: ProfileComponent 
  },
  
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule 
  ],
  declarations: [
    ViewAcademicQualificationComponent, 
    ViewAttachmentComponent, 
    ViewGeneralInfomationComponent, 
    ViewProfessionalQualificationComponent, 
    ViewRecordOfEmploymentComponent, 
    ViewRefereesComponent,
    TraineeProfileTableComponent,
    ViewRolesAndResposibilitiesComponent,
    ProfileComponent,
    ViewProfessionalMembershipComponent,
   
    ],
    providers: [ProfileInfoService,RolesAndResponsibilitiesService],
})
export class ViewProfileInfoModule { }
