import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingComponent } from './posting.component';
import {RouterModule,Routes} from '@angular/router';
import { RecordPostingDetailsComponent } from './record-posting-details/record-posting-details.component';
import { RecordPostingPreferenceComponent } from './record-posting-preference/record-posting-preference.component';
import { ViewRecordPostingPreferenceComponent } from './view-record-posting-preference/view-record-posting-preference.component';
import { MaterialModuleModule } from 'src/app/material-module.module';


const routes:Routes=[
  {
    path:'',
   component:PostingComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostingComponent, RecordPostingDetailsComponent, RecordPostingPreferenceComponent, ViewRecordPostingPreferenceComponent]
})
export class PostingModule { }
