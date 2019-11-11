import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from 'ngx-spinner';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';


import { DemandService } from './services';
import { AddDemandComponent } from './components';
import { ListDemandsComponent } from './components';
import { UpdateDemandComponent } from './components';
import { ChangeStatusComponent } from './components';
import { HomeComponent } from './components';
import { DemandPageComponent } from './components';


@NgModule({
  declarations: [
    AddDemandComponent,
    ListDemandsComponent,
    UpdateDemandComponent,
    ChangeStatusComponent,
    HomeComponent,
    DemandPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DataTablesModule,
    NgxSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    DemandService
  ]
})
export class DemandModule { }
