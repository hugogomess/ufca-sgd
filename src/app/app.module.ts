import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth';
import { StaticsModule } from './statics';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token'); },
        whitelistedDomains: [
          'localhost:8000',
          'https://api-ufca-sgd.herokuapp.com/'
        ],
        blacklistedRoutes: [
          'http://localhost:8000/auth/login',
          'https://api-ufca-sgd.herokuapp.com/auth/login'
        ],
        authScheme: 'JWT '
      }
    }),
    StaticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
