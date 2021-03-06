import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AuthRoutes } from './auth';
import { UserRoutes } from './user';
import { StaticsRoutes } from './statics';
import { AdminRoutes } from './admin';
import { DemandRoutes } from './demand';
import { GutMatrixRoutes } from './gut-matrix';
import { OpeningTermRoutes } from './opening-term';

import { NotFoundComponent } from './statics/components';


const routes: Routes = [
  ...StaticsRoutes,
  ...AuthRoutes,
  ...UserRoutes,
  ...AdminRoutes,
  ...DemandRoutes,
  ...GutMatrixRoutes,
  ...OpeningTermRoutes,
  { path: '**', component: NotFoundComponent },
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
