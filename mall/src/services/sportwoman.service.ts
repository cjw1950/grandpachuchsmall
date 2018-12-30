import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SportwomanService {
  constructor(private _http: Http) { }
  getService() {
    return this._http.get('http://localhost:8080/api/sports2')
    .pipe( map(response => response.json()));
  }
}
