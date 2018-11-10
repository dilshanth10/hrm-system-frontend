import { NgModule } from '@angular/core';

import {
  MatTableModule, 
  MatButtonModule,
   MatFormFieldModule, 
   MatInputModule, 
   MatRippleModule,
    MatPaginatorModule, 
    MatCheckboxModule, 
    MatRadioModule} from '@angular/material';
@NgModule({
  imports: [
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports:[
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  declarations: []
})
export class MaterialModuleModule { }
