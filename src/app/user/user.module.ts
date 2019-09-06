import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { UserService } from './services';
import { AddUserComponent } from './components';
import { ShowUsersComponent } from './components/';


@NgModule({
  declarations: [AddUserComponent, ShowUsersComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
   exports: [
    AddUserComponent,
    ShowUsersComponent
   ],
   providers: [
     UserService
   ]
})
export class UserModule { }
