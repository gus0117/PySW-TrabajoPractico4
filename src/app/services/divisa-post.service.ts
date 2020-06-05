import { Injectable } from '@angular/core';
import { Divisa } from '../models/divisa';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DivisaPostService {

  url = "https://community-neutrino-currency-conversion.p.rapidapi.com/convert";
  
  constructor(private _http: HttpClient) { }

  public getCambiarMoneda(valor:number,origen:string,destino:string)
  {
    let params = {'from-value':valor , 'from-type':origen,'to-type':destino};
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'community-neutrino-currency-conversion.p.rapidapi.com',
	      'x-rapidapi-key': '20b51c1541msh7d4326e7bd7ba58p12dd06jsn3fe63de0923f'
      })
    };
    //return this._http.post(this.url,{'from-value':1 , 'from-type':'USD','to-type':'ARS'}, httpOptions);
    return this._http.post(this.url, params, httpOptions);
  }
}
