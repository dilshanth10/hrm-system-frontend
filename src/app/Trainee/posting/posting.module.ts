import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingComponent } from './posting.component';
import {RouterModule,Routes} from '@angular/router';
import { RecordPostingDetailsComponent } from './record-posting-details/record-posting-details.component';


const routes:Routes=[
  {
    path:'',
   component:PostingComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostingComponent, RecordPostingDetailsComponent]
})
export class PostingModule { }
