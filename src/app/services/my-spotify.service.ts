import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MySpotifyService {

  URL_SEARCH = 'https://api.spotify.com/v1/search';


  constructor(private _http: Http) { }

  getArtists(searchTerm: string): Observable<any[]> {

    const headers = new Headers();
    headers.append('authorization', 'Bearer BQCB9WqKvgQY93LDpuO26yMa_5vUYJjqH2_Lpb_VN00niTKxWtTZZcNCcyxJnh9mLMwkrqQdv5fmn9z38WcGcw');

    const QUERY = `?q=${searchTerm}&type=artist`;
    const URL = this.URL_SEARCH + QUERY;

    return this._http.get(URL, { headers }).map(res => {
      return res.json().artists.items;
    });

  }

}
