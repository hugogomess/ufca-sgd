import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components';
import { NavbarComponent } from './components';
import { SidebarComponent } from './components';
import { FooterComponent } from './components';
import { PermissionDenidComponent } from './components';
import { ServerErrorComponent } from './components';
import { UnavailbleServiceComponent } from './components';
import { NotFoundComponent } from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NotFoundComponent,
    PermissionDenidComponent,
    ServerErrorComponent,
    UnavailbleServiceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class StaticsModule { }
