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
    MatIconModule
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
