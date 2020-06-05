import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

  url = "https://covid-19-tracking.p.rapidapi.com/v1";
  constructor(private _http:HttpClient) { }

  public getAllEstadisticas(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
        'x-rapidapi-key': '20b51c1541msh7d4326e7bd7ba58p12dd06jsn3fe63de0923f'
      })
    };
    return this._http.get(this.url, httpOptions);
  }

  public getEstaditica(pais: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
        'x-rapidapi-key': '20b51c1541msh7d4326e7bd7ba58p12dd06jsn3fe63de0923f'
      })
    };
    let param:string = "/"+pais;
    return this._http.get(this.url + param, httpOptions);
  }
}
