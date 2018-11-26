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
import { ProfileTableComponent } from './profile-table/profile-table.component';
import { ViewRolesAndResposibilitiesComponent } from './view-roles-and-resposibilities/view-roles-and-resposibilities.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: ProfileTableComponent,
  },
  {
   path: 'emp', component: ProfileComponent 
  }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [
    ViewAcademicQualificationComponent, 
    ViewAttachmentComponent, 
    ViewGeneralInfomationComponent, 
    ViewProfessionalQualificationComponent, 
    ViewRecordOfEmploymentComponent, 
    ViewRefereesComponent,
    ProfileTableComponent,
    ViewRolesAndResposibilitiesComponent,
    ProfileComponent]
})
export class ViewProfileInfoModule { }
