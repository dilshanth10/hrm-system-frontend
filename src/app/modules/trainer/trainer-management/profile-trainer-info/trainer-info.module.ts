import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileTrainerInfoComponent } from './profile-trainer-info.component';
const routes: Routes = [
   {
   
  }]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule

  ],
  declarations: []
})
export class TrainerInfoModule { }
