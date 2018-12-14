import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CustomMaterialModule} from './core/material.module';
import {AppRoutingModule} from './core/app.routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from "./service/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {ApiLicenseService} from "./service/api-license.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, ApiLicenseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
