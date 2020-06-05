import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DivisaGetService {

  url="https://currency-exchange.p.rapidapi.com/exchange";

  constructor(private _http:HttpClient) { }

  public getMonedaConvertida(valor:number, origen:string, destino:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
	      "x-rapidapi-key": "20b51c1541msh7d4326e7bd7ba58p12dd06jsn3fe63de0923f"
      })
    }
    let param = "?+from="+origen+"&to="+destino+"&q="+valor;
    return this._http.get(this.url+param, httpOptions);
  }
}
