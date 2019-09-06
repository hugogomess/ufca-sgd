import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [HeaderComponent, NotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class StaticsModule { }
