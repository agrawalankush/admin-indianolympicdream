import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { httpInterceptorProviders } from './http-interceptors/index';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServerErrorComponent } from './server-error/server-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogLoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    ServerErrorComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
