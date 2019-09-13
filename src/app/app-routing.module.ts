import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthRoutes } from './auth';
import { UserRoutes } from './user';
import { AdminRoutes } from './admin';
import { StaticsRoutes } from './statics';


const routes: Routes = [
  ...StaticsRoutes,
  ...AuthRoutes,
  ...UserRoutes,
  ...AdminRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
