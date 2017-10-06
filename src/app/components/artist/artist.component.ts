import { MySpotifyService } from '../../services/my-spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    public _mySpotifyService: MySpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params.map(params => params['id']).subscribe(id => {
      this._mySpotifyService.getArtistsById(id).subscribe();
    });



  }

}
