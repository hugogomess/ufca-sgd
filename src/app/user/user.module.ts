import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AddUserComponent } from './components';
import { UserService } from './services';
import { ShowUsersComponent } from './components/show-users/show-users.component';


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
