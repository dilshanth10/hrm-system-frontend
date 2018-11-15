import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDirectoryComponent } from './view-directory/view-directory.component';
import { Routes, RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule, MatDatepickerModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatSlideToggleModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
   path: 'view-directory', component: ViewDirectoryComponent 
  }
]

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule.forChild(routes),
    MatDatepickerModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    FormsModule
  ],
  declarations: [ViewDirectoryComponent]
})
export class DirectoryModule { }

