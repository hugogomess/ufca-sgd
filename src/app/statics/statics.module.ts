import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components';
import { HomeComponent, NotFoundComponent } from './components';
import { PermissionDenidComponent } from './components/permission-denid/permission-denid.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { UnavailbleServiceComponent } from './components/unavailble-service/unavailble-service.component';



@NgModule({
declarations: [HeaderComponent, HomeComponent, NotFoundComponent, PermissionDenidComponent, ServerErrorComponent, UnavailbleServiceComponent, ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})
export class StaticsModule { }
