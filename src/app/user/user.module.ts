import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';


import { UserService } from './services';
import { AddUserComponent } from './components';
import { ShowUsersComponent } from './components';
import { DeleteUserComponent } from './components';
import { ActiveUserComponent } from './components';
import { UpdateUserComponent } from './components';


@NgModule({
  declarations: [AddUserComponent, ShowUsersComponent, DeleteUserComponent, ActiveUserComponent, UpdateUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DataTablesModule
  ],
   exports: [],
   providers: [
     UserService
   ]
})
export class UserModule { }
