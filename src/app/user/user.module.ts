import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AddUserComponent } from './components';
import { UserService } from './services';


@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
   exports: [
    AddUserComponent
   ],
   providers: [
     UserService
   ]
})
export class UserModule { }
