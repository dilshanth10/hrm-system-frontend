import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkilldevelopmentComponent } from './skilldevelopment.component';

import {RouterModule,Routes} from '@angular/router';

const routes:Routes=[
{
  path:'',
  component:SkilldevelopmentComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SkilldevelopmentComponent]
})
export class SkilldevelopmentplanModule { }
