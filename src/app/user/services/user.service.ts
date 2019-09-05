import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiRoot = environment.apiRoot;

  constructor(private http: HttpClient) {
  }

  public addUser(user: User): Observable<any> {
    const url = this.apiRoot + 'users/';
    return this.http.post(url, {
      first_name: user.firstName,
      username: user.username,
      email: user.email,
      password: user.password,
      is_admin: user.isAdmin,
      is_demand_manager: user.isDemandManager,
      is_project_manager: user.isProjectManager,
      last_name: user.lastName
    });
  }
}
