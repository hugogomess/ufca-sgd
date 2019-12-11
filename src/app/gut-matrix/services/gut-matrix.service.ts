import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { GutMatrix } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GutMatrixService {

  private apiRoot = environment.apiRoot;

  constructor(
    private http: HttpClient
    ) {}

  public addGutMatrix(gutMatrix: GutMatrix): Observable<any> {
    const url = this.apiRoot + 'gut-matrix/';
    return this.http.post(url, gutMatrix);
  }

  public findAll(): Observable<GutMatrix[]> {
    const url = this.apiRoot + 'gut-matrix/';

    return this.http.get<GutMatrix[]>(url)
      .pipe(
        map(res => res as GutMatrix[]),
        catchError(error => throwError(error.message || error))
      );
  }

  public findById(id: number): Observable<GutMatrix> {
    const url = this.apiRoot + `gut-matrix/${id}/`;

    return this.http.get<GutMatrix>(url)
      .pipe(
        map(res => res as GutMatrix),
        catchError(error => throwError(error.message || error))
      );
  }

  public updateGutMatrix(gutMatrix: GutMatrix): Observable<any> {
    const url = this.apiRoot + `gut-matrix/${gutMatrix.id}/`;
    return this.http.patch(url, gutMatrix);
  }

}
