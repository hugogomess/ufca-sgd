import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components';
import { HomeComponent, NotFoundComponent } from './components';
import { PermissionDenidComponent } from './components/permission-denid/permission-denid.component';



@NgModule({
declarations: [HeaderComponent, HomeComponent, NotFoundComponent, PermissionDenidComponent, ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})
export class StaticsModule { }
