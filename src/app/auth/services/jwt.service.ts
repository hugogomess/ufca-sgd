import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../../environments/environment';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private apiRoot = environment.apiRoot;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    ) { }

  public login(user: User) {
    return this.http.post<{token: string}>(
      this.apiRoot.concat('auth/login/'), user)
      .pipe(tap(res => {
        localStorage.setItem('access_token', res.token);
      })
    );
  }

  public logout() {
    localStorage.removeItem('access_token');
  }

  public get isLogged(): boolean {
    if (localStorage.getItem('access_token') !==  null) {
      if (!this.jwtHelper.isTokenExpired()) {
        return true;
      }
    } else {
      return false;
    }
  }

  public get isLoggedOut(): boolean {
    return !(localStorage.getItem('access_token') !==  null);
  }

  public get token(): string {
    return localStorage.getItem('access_token');
  }

  get loggedUser() {
    const user = this.jwtHelper.decodeToken(this.token);
    if (user) {
      return user;
    } else {
      return null;
    }
  }
}
