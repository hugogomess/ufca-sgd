import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header';
<<<<<<< HEAD

=======
>>>>>>> 7450e90a6ee649b136cf02187c063943e9417d33

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HeaderModule,
=======
    HeaderModule
>>>>>>> 7450e90a6ee649b136cf02187c063943e9417d33
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
