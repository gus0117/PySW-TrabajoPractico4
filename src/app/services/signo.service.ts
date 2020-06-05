import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class SignoService {

  url = "https://zodiac-sign.p.rapidapi.com/signs";
  urlHoroscopo = "https://horoscope5.p.rapidapi.com/general/daily";

  constructor(private _http:HttpClient) { }

  public getSignos(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'zodiac-sign.p.rapidapi.com',
	      'x-rapidapi-key': '20b51c1541msh7d4326e7bd7ba58p12dd06jsn3fe63de0923f'
      })
    }
    return this._http.get(this.url, httpOptions);
  }



  public getHoroscopo(signo:string, fecha:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'horoscope5.p.rapidapi.com',
	      'x-rapidapi-key': '20b51c1541msh7d4326e7bd7ba58p12dd06jsn3fe63de0923f'
      })
    }
    let param: string = "?sign="+signo+"&date="+fecha;
    return this._http.get(this.urlHoroscopo+param, httpOptions);
  }
}
