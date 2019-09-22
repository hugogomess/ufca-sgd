import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components';
import { HomeComponent, NotFoundComponent } from './components';



@NgModule({
declarations: [HeaderComponent, HomeComponent, NotFoundComponent, ],
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
