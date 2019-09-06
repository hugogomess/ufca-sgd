import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthRoutes } from './auth';
import { UserRoutes } from './user';
import { NotFoundRoutes } from './statics';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  ...AuthRoutes,
  ...UserRoutes,
  ...NotFoundRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
