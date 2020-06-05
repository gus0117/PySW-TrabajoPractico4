import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = "https://livescore6.p.rapidapi.com/news/list";
  constructor(private _http:HttpClient) { }

  public getNoticias(categoria:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'livescore6.p.rapidapi.com',
	      'x-rapidapi-key': '20b51c1541msh7d4326e7bd7ba58p12dd06jsn3fe63de0923f'
      })
    };
    let param = "?+category="+categoria;
    return this._http.get(this.url+param, httpOptions);
  }
}
