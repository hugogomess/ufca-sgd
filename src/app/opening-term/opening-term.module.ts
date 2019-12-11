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


import { OpeningTermService } from './services';
import { AddOpeningTermComponent } from './components';
import { ListOpeningTermsComponent } from './components';
import { UpdateOpeningTermComponent } from './components';


@NgModule({
  declarations: [
    AddOpeningTermComponent,
    ListOpeningTermsComponent,
    UpdateOpeningTermComponent
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
  ],
  providers: [
    OpeningTermService
  ]
})
export class OpeningTermModule { }
