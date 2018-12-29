import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentHistoryComponent } from './payment-history.component';
import { AddPaymentHistoryComponent } from './add-payment-history/add-payment-history.component';
import { TrainerManagementComponent } from '../trainer-management.component';
import { AddPaymentTrainerComponent } from './add-payment-trainer/add-payment-trainer.component';
import { ViewPaymentTrainerComponent } from './view-payment-trainer/view-payment-trainer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PaymentHistoryComponent,
    AddPaymentHistoryComponent,
    TrainerManagementComponent,
    AddPaymentTrainerComponent,
    ViewPaymentTrainerComponent
  ]
})
export class PaymentHistoryModule { }
