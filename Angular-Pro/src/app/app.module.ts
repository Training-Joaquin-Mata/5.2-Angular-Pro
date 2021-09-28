import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  AuthFormModule } from './auth-form/auth-form.module'

import { ExampleOneComponent } from '../app/viewEncapsulation/one/one.component';
import { ExampleTwoComponent } from '../app/viewEncapsulation/two/two.component';
import { ExampleThreeComponent } from '../app/viewEncapsulation/three/three.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
