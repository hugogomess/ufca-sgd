import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { OpeningTerm } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OpeningTermService {

  private apiRoot = environment.apiRoot;

  constructor(
    private http: HttpClient
    ) {}

  public addOpeningTerm(openingTerm: OpeningTerm): Observable<any> {
    const url = this.apiRoot + 'opening-term/';
    return this.http.post(url, openingTerm);
  }

  public findAll(): Observable<OpeningTerm[]> {
    const url = this.apiRoot + 'opening-term/';

    return this.http.get<OpeningTerm[]>(url)
      .pipe(
        map(res => res as OpeningTerm[]),
        catchError(error => throwError(error.message || error))
      );
  }

  public findById(id: number): Observable<OpeningTerm> {
    const url = this.apiRoot + `opening-term/${id}/`;

    return this.http.get<OpeningTerm>(url)
      .pipe(
        map(res => res as OpeningTerm),
        catchError(error => throwError(error.message || error))
      );
  }

  public updateOpeningTerm(openingTerm: OpeningTerm): Observable<any> {
    const url = this.apiRoot + `opening-term/${openingTerm.id}/`;
    return this.http.patch(url, openingTerm);
  }

}
