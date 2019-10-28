import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components';
import { HomeComponent } from './components';
import { NavbarComponent } from './components';
import { SidebarComponent } from './components';
import { FooterComponent } from './components';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class StaticsModule { }
