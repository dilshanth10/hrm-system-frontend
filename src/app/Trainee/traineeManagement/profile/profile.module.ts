import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { GeneralInfomationComponent } from './general-infomation/general-infomation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileComponent, GeneralInfomationComponent]
})
export class ProfileModule { }
