import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MySpotifyService {

  public artists: any[] = [];

  public artist: any = {};

  public tracks: any[] = [];

  token = 'BQAdD-mm_OOrzFxVz_lNcYCml8cSMeoRzAXvutr9o5TleqkekV746uVTEqbvslWrUgDrGJQqkSlMRzdd_NedJw';

  URL_TOKEN = 'https://accounts.spotify.com/api/token';

  URL_SEARCH = 'https://api.spotify.com/v1/search';

  URL_SEARCH_ARTISTS = 'https://api.spotify.com/v1/artists/';

  constructor(private _http: Http) { }

  /*getToken(): Observable<Response> {

    const headers: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const options = new RequestOptions({ headers: headers });

    const body = JSON.stringify(
      {
        'client_id': 'a412632d7c5e4fb98515babbf4302049',
        'client_secret': '8bf0bd2836954eacb35cd4b5fcd85876',
        'grant_type': 'client_credentials'
      });

    return this._http.post(this.URL_TOKEN, body, options);

  }*/



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


  GetanArtistTopTracks(id: string, market?: string) {
    console.log('Tracks');

    if (!market) {
      market = 'US';
    }

    const headers = new Headers();
    headers.append('authorization', `Bearer ${this.token}`);

    const QUERY = `${id}/top-tracks?country=${market}`;
    const URL = this.URL_SEARCH_ARTISTS + QUERY;

    console.log(URL);

    return this._http.get(URL, { headers }).map(res => {
      console.log(res.json());
      this.tracks = res.json().tracks;
    });

  }
}
