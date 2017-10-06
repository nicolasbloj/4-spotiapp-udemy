import { MySpotifyService } from '../../services/my-spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  preview = 'a2a9c13416fc981d035e75f16ec63b0d8e6486ba?cid=a412632d7c5e4fb98515babbf4302049';
  constructor(private _activatedRoute: ActivatedRoute,
    public _mySpotifyService: MySpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params.map(params => params['id']).subscribe(id => {
      this._mySpotifyService.getArtistsById(id).subscribe();
      this._mySpotifyService.GetanArtistTopTracks(id).subscribe();
    });



  }

}
