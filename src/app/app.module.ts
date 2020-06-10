import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { httpInterceptorProviders } from './http-interceptors/index';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DialogLoginComponent,
    PagenotfoundComponent,
    ServerErrorComponent,
    LoaderComponent,
    HomepageComponent
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
