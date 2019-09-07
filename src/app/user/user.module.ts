import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { UserService } from './services';
import { AddUserComponent } from './components';
import { ShowUsersComponent } from './components';
import { DeleteUserComponent } from './components';


@NgModule({
  declarations: [AddUserComponent, ShowUsersComponent, DeleteUserComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
   exports: [
    AddUserComponent,
    ShowUsersComponent,
    DeleteUserComponent
   ],
   providers: [
     UserService
   ]
})
export class UserModule { }
