import { FormsModule } from '@angular/forms';
import { MySpotifyService } from './services/my-spotify.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    APP_ROUTING,
    HttpModule

  ],
  bootstrap: [AppComponent],
  providers: [MySpotifyService]

})
export class AppModule { }
