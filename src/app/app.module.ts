import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { PresensiComponent } from './user/presensi/presensi.component';
import { PermissionComponent } from './user/permission/permission.component';
import { SubmitReportComponent } from './user/submit-report/submit-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material design
import { MaterialDesign } from './Material/Material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LoginComponent,
    ForgotComponent,
    DashboardComponent,
    PresensiComponent,
    PermissionComponent,
    SubmitReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
