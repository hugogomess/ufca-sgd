import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth';
import { StaticsModule } from './statics';
import { UserModule } from './user';
import { environment } from '../environments/environment';
import { AdminModule } from './admin';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token'); },
        whitelistedDomains: ['api-ufca-sgd.herokuapp.com'],
        blacklistedRoutes: [environment.apiRoot + 'auth/login'],
        authScheme: 'JWT ',
      }
    }),
    StaticsModule,
    UserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
