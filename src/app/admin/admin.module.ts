import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelComponent } from './components';


@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AdminPanelComponent
   ],
   providers: []

})
export class AdminModule { }
