import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header';
import { RouterModule } from '@angular/router';


@NgModule({
declarations: [HeaderComponent,],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class StaticsModule { }
