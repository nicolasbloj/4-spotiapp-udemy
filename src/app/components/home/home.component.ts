import { Component, OnInit } from '@angular/core';
import { MySpotifyService } from '../../services/my-spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    artists: any[] = [];

    constructor(private _mySpotifyService: MySpotifyService) { }

    ngOnInit() {
        this._mySpotifyService.getArtists('metallica').subscribe(data => {
            this.artists = data;
            console.log(this.artists);
        });
    }

}
