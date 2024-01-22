import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import {HttpClientModule} from "@angular/common/http";
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsListComponent,
    AlbumsListComponent,
    ArtistDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
