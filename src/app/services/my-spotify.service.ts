import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MySpotifyService {
  public artists: any[] = [];

  public artist: any = {};

  token = 'BQCwiqMpzMQ1dDH82oL-qf9el7fJn4mXKg4ayjcWHlRg2Ma3QH_36nSuxf67lLgVJMJfe1_ZqwSxzcvRJTJ3dw';

  URL_SEARCH = 'https://api.spotify.com/v1/search';

  URL_SEARCH_ARTISTS = 'https://api.spotify.com/v1/artists/';

  constructor(private _http: Http) { }

  // con return para setear artists en una variable en search.component.ts
  getArtists(searchTerm: string): Observable<any[]> {

    const headers = new Headers();
    headers.append('authorization', `Bearer ${this.token}`);
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
    headers.append('authorization', `Bearer ${this.token}`);

    const QUERY = `?q=${searchTerm}&type=artist`;
    const URL = this.URL_SEARCH + QUERY;

    return this._http.get(URL, { headers }).map(res => {
      console.log(res.json());
      this.artists = res.json().artists.items;
    });

  }

  getArtistsById(id: string) {

    const headers = new Headers();
    headers.append('authorization', `Bearer ${this.token}`);

    const QUERY = `${id}`;
    const URL = this.URL_SEARCH_ARTISTS + QUERY;

    console.log(URL);

    return this._http.get(URL, { headers }).map(res => {
      console.log(res.json());
      this.artist = res.json();
    });

  }

}
