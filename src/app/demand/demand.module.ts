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


@NgModule({
  declarations: [AddDemandComponent, ListDemandsComponent, UpdateDemandComponent, ChangeStatusComponent],
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
    MatSelectModule
  ],
  exports: [],
  providers: [
    DemandService
  ]
})
export class DemandModule { }
