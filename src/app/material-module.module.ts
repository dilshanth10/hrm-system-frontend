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
    import {MatTabsModule} from '@angular/material/tabs';
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
    MatTabsModule,
    FlatpickrModule.forRoot()
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    FlatpickrModule
  ],
  declarations: []
})
export class MaterialModuleModule { }
