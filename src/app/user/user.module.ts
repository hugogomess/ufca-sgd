import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from 'ngx-spinner';


import { UserService } from './services';
import { AddUserComponent } from './components';
import { ShowUsersComponent } from './components';
import { DeleteUserComponent } from './components';
import { ActiveUserComponent } from './components';
import { UpdateUserComponent } from './components';
import { MatchValueDirective } from './directives';


@NgModule({
  declarations: [AddUserComponent, ShowUsersComponent, DeleteUserComponent, ActiveUserComponent, UpdateUserComponent, MatchValueDirective],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DataTablesModule,
    NgxSpinnerModule
  ],
   exports: [],
   providers: [
     UserService
   ]
})
export class UserModule { }
