import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {


  constructor(private _http: Http) { }

   getService() {
       return this._http.get('http://localhost:8080/api/phones')
       .pipe( map(response => response.json()));
  }
}
