import { NgModule } from '@angular/core';

import {
  MatTableModule, 
  MatButtonModule,
   MatFormFieldModule, 
   MatInputModule, 
   MatRippleModule,
    MatPaginatorModule, 
    MatCheckboxModule, 
    MatRadioModule,
    MatIconModule} from '@angular/material';
import { FlatpickrModule } from 'angularx-flatpickr';
@NgModule({
  imports: [
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    FlatpickrModule.forRoot()
  ],
  exports:[
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    FlatpickrModule
  ],
  declarations: []
})
export class MaterialModuleModule { }
