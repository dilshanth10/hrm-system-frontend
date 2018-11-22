import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModuleModule } from './material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileInfoService } from './modules/general/profiles/view-profile-info/profile-table/profile-info.service';

import { CareerDevPlan } from './modules/general/career-dev-plan/Model/career-dev-plan';

import { DirectoryService } from './services/directory/directory.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProfileInfoService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
