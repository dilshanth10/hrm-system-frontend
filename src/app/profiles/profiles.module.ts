import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicQualificationComponent } from './profile-info/academic-qualification/academic-qualification.component';
import { GeneralInformationComponent } from './profile-info/general-information/general-information.component';
import { RecordOfEmploymentComponent } from './profile-info/record-of-employment/record-of-employment.component';
import { RefereesComponent } from './profile-info/referees/referees.component';
import { ProfessionalQualificationComponent } from './profile-info/professional-qualification/professional-qualification.component';
import { ProfileComponent } from './profile.component';

import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from '../material-module.module';
import { AttachmentComponent } from './profile-info/attachment/attachment.component';
const routes: Routes = [

  {
    path: '', component: ProfileComponent,
    children: [
      { path: 'generalInfo', component: GeneralInformationComponent },
      { path: 'academicInfo', component: AcademicQualificationComponent },
      { path: 'professionalQualification', component: ProfessionalQualificationComponent },
      { path: 'recordOfEmp', component: RecordOfEmploymentComponent },
      { path: 'referees', component: RefereesComponent },
      { path: 'attachment', component: AttachmentComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AcademicQualificationComponent,
    GeneralInformationComponent,
    RecordOfEmploymentComponent,
    RefereesComponent,
    ProfessionalQualificationComponent,
    ProfileComponent,
    AttachmentComponent
  ]
})
export class ProfilesModule { }
