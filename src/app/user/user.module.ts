import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';


import { UserService } from './services';
import { AddUserComponent } from './components';
import { ShowUsersComponent } from './components';
import { DeleteUserComponent } from './components';
import { ActiveUserComponent } from './components';


@NgModule({
  declarations: [AddUserComponent, ShowUsersComponent, DeleteUserComponent, ActiveUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
   exports: [],
   providers: [
     UserService
   ]
})
export class UserModule { }
