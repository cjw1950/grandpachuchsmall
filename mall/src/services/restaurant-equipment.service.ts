import { Injectable } from '@angular/core';
import { Http,  } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantEquipmentService {

  constructor(private _http: Http) { }
  getService() {
    return this._http.get('http://localhost:8080/api/rest')
      .pipe(map(response => response.json()));
  }



}
