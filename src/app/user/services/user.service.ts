import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../models';
import { JwtService } from '../../auth/services';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiRoot = environment.apiRoot;

  constructor(
    private http: HttpClient,
    private jwtService: JwtService
    ) {}

  public addUser(user: User): Observable<any> {
    const url = this.apiRoot + 'users/';
    return this.http.post(url, user);
  }

  public findAll(): Observable<User[]> {
    const url = this.apiRoot + 'users/';

    return this.http.get<User[]>(url)
      .pipe(
        map(res => res as User[]),
        catchError(error => throwError(error.message || error))
      );
  }

  public findById(id: number): Observable<User> {
    const url = this.apiRoot + `users/${id}/`;

    return this.http.get<User>(url)
      .pipe(
        map(res => res as User),
        catchError(error => throwError(error.message || error))
      );
  }

  public deleteUser(id: number): Observable<any> {
    const url = this.apiRoot + `users/${id}/`;
    return this.http.delete(url);
  }

  public activeUser(id: number): Observable<any> {
    const url = this.apiRoot + `users/${id}/activate/`;
    return this.http.get(url);
  }

  public updateUser(user: User): Observable<User> {
    const url = this.apiRoot + `users/${user.id}/`;
    return this.http.patch(url, user);
  }

  public isAdmin(id: number): boolean {
    let user: User;
    this.findById(id).subscribe(
      res => user = res
    );

    if (user.is_admin) {
      return true;
    } else {
      return false;
    }
  }

  public isDemandManager(id: number): boolean {
    let user: User;
    this.findById(id).subscribe(
      res => user = res
    );

    if (user.is_demand_manager) {
      return true;
    } else {
      return false;
    }
  }

  public isProjectManager(id: number): boolean {
    let user: User;
    this.findById(id).subscribe(
      res => user = res
    );

    if (user.is_project_manager) {
      return true;
    } else {
      return false;
    }
  }
}
