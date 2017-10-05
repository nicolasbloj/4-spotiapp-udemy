import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MySpotifyService {
  public artists: any[] = [];

  URL_SEARCH = 'https://api.spotify.com/v1/search';


  constructor(private _http: Http) { }

  // con return para setear artists en una variable en search.component.ts
  getArtists(searchTerm: string): Observable<any[]> {

    const headers = new Headers();
    headers.append('authorization', 'Bearer BQCeqfFQIiDGLmzd1dkmaAz_JA2MZtexsw2c2o7TGFeig4favWfyHO6v0YgnHhH6fJJmrxCXIoVL0XEJrk5BSQ');

    const QUERY = `?q=${searchTerm}&type=artist`;
    const URL = this.URL_SEARCH + QUERY;

    return this._http.get(URL, { headers }).map(res => {
      this.artists = res.json().artists;
      console.log(this.artists);
      return res.json().artists.items;
    });

  }

  // con este getArtists almacenamos en una variable artists en el mismo servicio lo que 
  // nos devuelve el http.get
  // luego accedemos a esta variable desde un ngfor en search.component.html
  getArtists2(searchTerm: string) {

    const headers = new Headers();
    headers.append('authorization', 'Bearer BQCeqfFQIiDGLmzd1dkmaAz_JA2MZtexsw2c2o7TGFeig4favWfyHO6v0YgnHhH6fJJmrxCXIoVL0XEJrk5BSQ');

    const QUERY = `?q=${searchTerm}&type=artist`;
    const URL = this.URL_SEARCH + QUERY;

    return this._http.get(URL, { headers }).map(res => {
      this.artists = res.json().artists.items;
    });

  }

}
