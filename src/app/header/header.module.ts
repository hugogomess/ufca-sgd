import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { HeaderComponent } from './components/header';

=======

import { HeaderComponent } from './components';
>>>>>>> 7450e90a6ee649b136cf02187c063943e9417d33


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
<<<<<<< HEAD
  exports:[
=======
  exports: [
>>>>>>> 7450e90a6ee649b136cf02187c063943e9417d33
    HeaderComponent
  ]
})
export class HeaderModule { }
