import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User, UsersResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiRoot = environment.apiRoot;

  constructor(private http: HttpClient) {
  }

  public addUser(user: User): Observable<any> {
    const url = this.apiRoot + 'users/';
    return this.http.post(url, user);
  }

  public findAll(): Observable<User[]> {
    const url = this.apiRoot + 'users/';

    return this.http.get<UsersResponse>(url)
      .pipe(
        map(res => res.results as User[]),
        catchError(error => throwError(error.message || error))
      );
  }

  public deleteUser(id: number): Observable<any> {
    const url = this.apiRoot + `users/${id}/`;
    return this.http.delete(url);
  }

  public reActiveUser(id: number): Observable<any> {
    const url = this.apiRoot + `users/${id}/activate/`;
    return this.http.get(url);
  }

  public updateUser(user: User): Observable<User> {
    const url = this.apiRoot + `users/${user.id}/`;
    return this.http.patch(url, user);
  }
}
