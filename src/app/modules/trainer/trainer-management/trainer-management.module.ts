import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerManagementComponent } from './trainer-management.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { TrainingHistoryService } from 'src/app/services/training-history/training-history.service';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AddAcademicQualificationComponent } from './profile/add-academic-qualification/add-academic-qualification.component';
import { AddProfessionalQualificationComponent } from './profile/add-professional-qualification/add-professional-qualification.component';
import { AcademicQualificationComponent } from './profile/academic-qualification/academic-qualification.component';
import { ProfessionalQualificationComponent } from './profile/professional-qualification/professional-qualification.component';
import { ProfessionalMenberShipsComponent } from './profile/professional-menber-ships/professional-menber-ships.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { FormProfessionalComponent } from './profile/form-professional/form-professional.component';
import { FormUniversityComponent } from './profile/form-university/form-university.component';
import { EditModalComponent } from './profile/academic-qualification/Modal/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './profile/academic-qualification/Modal/delete-modal/delete-modal.component';
import { SuggestionAndFeedbackComponent } from './suggestion-and-feedback/suggestion-and-feedback.component';
import { GeneralInformationComponent } from './profile/general-information/general-information.component';
import { TechnologySkillLevelComponent } from './profile/technology-skill-level/technology-skill-level.component';
import { RecordOfEmploymentComponent } from './profile/record-of-employment/record-of-employment.component';
import { AddRecordOfEmploymentComponent } from './profile/record-of-employment/add-record-of-employment/add-record-of-employment.component';
import { EditRecordOfEmploymentComponent } from './profile/record-of-employment/edit-record-of-employment/edit-record-of-employment.component';
import { AddTechnologySkillLevelComponent } from './profile/technology-skill-level/add-technology-skill-level/add-technology-skill-level.component';
import { EditTechnologySkillLevelComponent } from './profile/technology-skill-level/edit-technology-skill-level/edit-technology-skill-level.component';
import { SuggestionService } from '../Service/suggestion.service';
import { TrainerAvailabilityComponent } from './trainer-availability/trainer-availability.component';
import { ViewAvailabilityComponent } from './trainer-availability/view-availability/view-availability.component';
import { ScheduleComponent } from './trainer-availability/schedule/schedule.component';
import { AddAvailabilityComponent } from './trainer-availability/add-availability/add-availability.component';
import { TrainingHistoryComponent } from './training-history/training-history.component';
import { AddPaymentHistoryComponent } from './payment-history/add-payment-history/add-payment-history.component';
import { ViewPaymentHistoryComponent } from './payment-history/view-payment-history/view-payment-history.component';
import { AddGeneralInformationComponent } from './profile/general-information/Modal/add-general-information/add-general-information.component';
import { EditGeneralInformationComponent } from './profile/general-information/Modal/edit-general-information/edit-general-information.component';
import { AddSuggestionComponent } from './suggestion-and-feedback/add-suggestion/add-suggestion.component';
import { ViewOwnSuggestionComponent } from './suggestion-and-feedback/view-own-suggestion/view-own-suggestion.component';
import { ViewSuggestionComponent } from './suggestion-and-feedback/view-suggestion/view-suggestion.component';
import { AddPaymentTrainerComponent } from './payment-history/add-payment-trainer/add-payment-trainer.component';
import { ViewPaymentTrainerComponent } from './payment-history/view-payment-trainer/view-payment-trainer.component';
import { AddProfileTrainerInfoComponent } from './ProfileTrainer/add-profile-trainer-info/add-profile-trainer-info.component';
import { ViewProfileTrainerInfoComponent } from './ProfileTrainer/view-profile-trainer-info/view-profile-trainer-info.component';
import { ProfileTrainerComponent } from './ProfileTrainer/view-profile-trainer-info/profile-trainer/profile-trainer.component';
import { ProfileTrainerTableComponent } from './ProfileTrainer/view-profile-trainer-info/profile-trainer-table/profile-trainer-table.component';
import { ProfileTrainerInfoComponent } from './profile-trainer-info/profile-trainer-info.component';
import { AddTechnologySkillComponent } from './ProfileTrainer/add-profile-trainer-info/add-technology-skill/add-technology-skill.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentDetailsComponent } from './appointment/appointment-details/appointment-details.component';



const routes: Routes = [

  // {
  //   path: 'profile',
  //   component: ProfileTrainerInfoComponent
  // },
  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: 'suggestion',
    component: SuggestionAndFeedbackComponent
  },
  {

    path: 'trainer-availability',
    component: TrainerAvailabilityComponent
  },
  {
    path: 'training-history',
    component: TrainingHistoryComponent
  },
  {
    path: 'payment-history',
    component: PaymentHistoryComponent,
    children:[
      {
        path: 'paymentHistory',
        component:AddPaymentHistoryComponent 
      },
      {
        path: 'paymentHistoryTrainer',
        component:AddPaymentTrainerComponent 
      }
    ]
  },
  {
    path: 'availability',
    component: TrainerAvailabilityComponent
  }
  


];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TrainerManagementComponent,
    PaymentHistoryComponent,
    TrainingHistoryComponent,
    ProfileComponent,
    AddAcademicQualificationComponent,
    AddProfessionalQualificationComponent,
    AcademicQualificationComponent,
    ProfessionalQualificationComponent,
    ProfessionalMenberShipsComponent,
    ViewProfileComponent,
    FormProfessionalComponent,
    FormUniversityComponent,
    EditModalComponent,
    DeleteModalComponent,
    SuggestionAndFeedbackComponent,
    GeneralInformationComponent,
    TechnologySkillLevelComponent,
    RecordOfEmploymentComponent,
    AddSuggestionComponent,
    ViewOwnSuggestionComponent,
    ViewSuggestionComponent,
    AddRecordOfEmploymentComponent,
    EditRecordOfEmploymentComponent,
    AddTechnologySkillLevelComponent,
    EditTechnologySkillLevelComponent,
    TrainerAvailabilityComponent,
    ViewAvailabilityComponent,
    ScheduleComponent,
    AddAvailabilityComponent,
    TrainingHistoryComponent,
    AddPaymentHistoryComponent,
    ViewPaymentHistoryComponent,
    AddGeneralInformationComponent,
    EditGeneralInformationComponent,
    ViewPaymentHistoryComponent,
    AddPaymentTrainerComponent,
    ViewPaymentTrainerComponent,
    AddProfileTrainerInfoComponent,
    ViewProfileTrainerInfoComponent,
    ProfileTrainerComponent,
    ProfileTrainerTableComponent,
    ProfileTrainerInfoComponent,
    AddTechnologySkillComponent,
    AppointmentComponent,
    AppointmentDetailsComponent,
  ],
  providers: [TrainingHistoryService, SuggestionService]
})
export class TrainerManagementModule { }
