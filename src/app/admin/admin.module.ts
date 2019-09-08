import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminPanelComponent } from './components';


@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdminPanelComponent
   ],
   providers: []

})
export class AdminModule { }
