import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingComponent } from './posting.component';
import {RouterModule,Routes} from '@angular/router';
import { RecordPostingDetailsComponent } from './record-posting-details/record-posting-details.component';
import { ViewRecordPostingComponent } from './view-record-posting/view-record-posting.component';
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
  declarations: [PostingComponent, RecordPostingDetailsComponent, ViewRecordPostingComponent]
})
export class PostingModule { }
