import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUserComponent } from './components';



@NgModule({
  declarations: [ManageUserComponent],
  imports: [
    CommonModule 
  ],
  exports: [
    ManageUserComponent
   ],
   providers:[]

})
export class AdminModule { }
