import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BakerytinsService {

  constructor(private _http: Http) { }

   getService() {
       return this._http.get('http://localhost:8080/api/laptop')
       .pipe( map(response => response.json()));
  }

}
//
