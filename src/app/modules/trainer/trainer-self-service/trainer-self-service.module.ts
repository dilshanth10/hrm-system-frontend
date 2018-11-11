import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerSelfServiceComponent } from './trainer-self-service.component';
import { PaymentInitiationComponent } from './payment-initiation/payment-initiation.component';
import {RouterModule,Routes} from '@angular/router';

const routes:Routes=[
  {
    path:'',
    component:TrainerSelfServiceComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrainerSelfServiceComponent, PaymentInitiationComponent]
})
export class TrainerSelfServiceModule { }
