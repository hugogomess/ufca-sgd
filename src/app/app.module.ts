import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule, JwtService } from './auth';
import { StaticsModule } from './statics';
import { UserModule } from './user';
import { AdminModule } from './admin';
import { DemandModule } from './demand';
import { GutMatrixModule } from './gut-matrix';
import { OpeningTermModule } from './opening-term';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['api-ufca-sgd.herokuapp.com', 'localhost:8000'],
        blacklistedRoutes: ['api-ufca-sgd.herokuapp.com/auth/login'],
        authScheme: 'JWT ',
      }
    }),
    StaticsModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    AdminModule,
    DemandModule,
    GutMatrixModule,
    OpeningTermModule
  ],
  providers: [JwtService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
