import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
    constructor(private _http: Http) { }
  getService() {
    return this._http.get('http://localhost:8080/api/para')
    .pipe( map(response => response.json()));
  }
}
