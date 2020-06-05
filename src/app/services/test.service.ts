import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _http:HttpClient) { }

  public getCambiarMoneda(valor:number,origen:string,destino:string)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'community-neutrino-currency-conversion.p.rapidapi.com',
	      'x-rapidapi-key': '20b51c1541msh7d4326e7bd7ba58p12dd06jsn3fe63de0923f'
      })
    };
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",{'from-value':1 , 'from-type':'USD','to-type':'ARS'}, httpOptions);
 
  }
}
