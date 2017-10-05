import { Component, OnInit } from '@angular/core';
import { MySpotifyService } from '../../services/my-spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {


  artists: any[] = [];

  termino = '';

  constructor(public _mySpotifyService: MySpotifyService) { }

  ngOnInit() {
  }

  /*public search() {
    if (this.termino !== '') {
      this._mySpotifyService.getArtists(this.termino).subscribe(data => {
        this.artists = data;
        console.log(this.artists);
      });
    }
  }*/

  public search() {
    if (this.termino !== '') {
      this._mySpotifyService.getArtists2(this.termino).subscribe();
    }
  }
}
