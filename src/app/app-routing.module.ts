import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AdminLayoutRoutes } from './layouts/admin-layout/admin-layout.routing';

import { AuthRoutes } from './auth';
import { UserRoutes } from './user';
import { StaticsRoutes } from './statics';


const routes: Routes = [
  ...StaticsRoutes,
  ...AuthRoutes,
  ...UserRoutes,
  ...AdminLayoutRoutes,
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
