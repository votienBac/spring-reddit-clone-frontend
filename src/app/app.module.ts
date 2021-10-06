import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';


import {NgxWebstorageModule} from 'ngx-webstorage';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     LoginComponent,
    SignUpComponent
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot()
   
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
