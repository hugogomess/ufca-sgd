import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthRoutes } from './auth';
import { UserRoutes } from './user';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  ...AuthRoutes,
  ...UserRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
