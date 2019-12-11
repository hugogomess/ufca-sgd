import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Demand } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  private apiRoot = environment.apiRoot;

  constructor(
    private http: HttpClient
    ) {}

  public addDemand(demand: Demand): Observable<any> {
    const url = this.apiRoot + 'demands/';
    demand.status = 'ABERTA';
    return this.http.post(url, demand);
  }

  public findAll(): Observable<Demand[]> {
    const url = this.apiRoot + 'demands/';

    return this.http.get<Demand[]>(url)
      .pipe(
        map(res => res as Demand[]),
        catchError(error => throwError(error.message || error))
      );
  }

  public findById(id: number): Observable<Demand> {
    const url = this.apiRoot + `demands/${id}/`;

    return this.http.get<Demand>(url)
      .pipe(
        map(res => res as Demand),
        catchError(error => throwError(error.message || error))
      );
  }

  public findByFilter(filterField: string, value: string): Observable<Demand[]> {
    const url = this.apiRoot + `demands/?${filterField}=${value}`;

    return this.http.get<Demand[]>(url)
      .pipe(
        map(res => res as Demand[]),
        catchError(error => throwError(error.message || error))
      );
  }

  public updateDemand(demand: Demand): Observable<any> {
    const url = this.apiRoot + `demands/${demand.id}/`;
    return this.http.patch(url, demand);
  }

  public switchStatus(demand: Demand): Observable<any> {
    const url = this.apiRoot + `demands/${demand.id}/switch-status/`;
    return this.http.post(url, {
      "status": demand.status
    });
  }

}
