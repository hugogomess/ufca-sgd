import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private apiRoot = environment.apiRoot;

  constructor(private http: HttpClient) {
  }

  login(user: User) {
    return this.http.post<{token: string}>(
      this.apiRoot.concat('auth/login/'), user)
      .pipe(tap(res => {
        localStorage.setItem('access_token', res.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !==  null;
  }

  public get loggedOut(): boolean {
    return !(localStorage.getItem('access_token') !==  null);
  }


}
