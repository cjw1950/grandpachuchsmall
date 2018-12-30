import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuicetanksService {

  constructor(private _http: Http ) { }

public getService(): any {
  return this._http.get('http://localhost:8080/api/phones')
  .pipe(map( response =>   response.json() ) );

}




  public handleError(error) {
       console.log('the error was' + error);
    return Observable.throw(error || 'unknown system error');
  }
}//
