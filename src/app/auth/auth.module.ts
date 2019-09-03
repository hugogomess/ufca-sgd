import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginComponent } from './components';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ],
  providers: []
})
export class AuthModule { }
