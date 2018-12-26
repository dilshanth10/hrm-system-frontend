import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AddAcademicQualificationComponent } from './add-academic-qualification/add-academic-qualification.component';
import { AddProfessionalQualificationComponent } from './add-professional-qualification/add-professional-qualification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'viewProfile',
        component: ViewProfileComponent
      },
      {
        path: 'AcademicQualification',
        component: AddAcademicQualificationComponent
      },
      {
        path: 'ProfessionalQualification',
        component: AddProfessionalQualificationComponent
      }

    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ViewProfileComponent,
    ProfileComponent,
    AddAcademicQualificationComponent,
    AddProfessionalQualificationComponent

  ]
})
export class ProfileModule { }
