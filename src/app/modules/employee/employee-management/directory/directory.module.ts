import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDirectoryComponent } from './view-directory/view-directory.component';
import { Routes, RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { MatSidenavModule, MatDatepickerModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatSlideToggleModule, MatNativeDateModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MaterialModuleModule } from '../../../../material-module.module';

const routes: Routes = [
  {
   path: 'view-directory', component: ViewDirectoryComponent 
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialModuleModule,
    MatIconModule
  ],
  declarations: [ViewDirectoryComponent]
})
export class DirectoryModule { }

