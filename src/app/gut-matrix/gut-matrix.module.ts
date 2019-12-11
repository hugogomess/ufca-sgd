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


import { GutMatrixService } from './services';
import { AddGutMatrixComponent } from './components';
import { ListGutMatricesComponent } from './components';
import { UpdateGutMatrixComponent } from './components';


@NgModule({
  declarations: [
    AddGutMatrixComponent,
    ListGutMatricesComponent,
    UpdateGutMatrixComponent
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
    GutMatrixService
  ]
})
export class GutMatrixModule { }
