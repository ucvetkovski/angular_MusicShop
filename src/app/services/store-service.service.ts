import { EventEmitter, Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {  Genre, Artist, Format } from '../../models/artist.model';

@Injectable({
  providedIn: 'root'
})
  @NgModule({
    imports: [HttpClientModule]
})
export class StoreServiceService {
  constructor(private httpClient: HttpClient) { }
  
  getData(action?: string, pr: any = {}): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let params = new HttpParams().set('action', action ? action : "");

    if (pr) {
      for (const key in pr) {
        if (pr.hasOwnProperty(key)) {
          params = params.set(key, pr[key]);
        }
      }
    }

    return this.httpClient.get("http://localhost:8000/store_api.php",{headers, params});
  }

  postData(action: string, data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    
    let params = new HttpParams().set('action', action);

    return this.httpClient.post("http://localhost:8000/store_api.php", data, { headers, params });
  }

  getGenres(genreId: Array<string>, podaci: any): Array<string>{
    let genres : Array<string> = [];
    genreId.forEach(genre => {
      let gen = podaci.genres.find((g: Genre) => g.id === genre);
      genres.push(gen.name);
    });
    return genres;
  }

  getFormat(formatId: number, podaci: any): string{
    return podaci.formats.find((f: Format) => f.id === formatId).name;
  }
}
