import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import {HttpClientModule} from "@angular/common/http";
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import {FooterComponent} from "./footer/footer.component";
import {ArtistsRoutingModule} from "./artists-list/artist-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ArtistsListComponent,
    AlbumsListComponent,
    ArtistDetailComponent,
    FooterComponent,
    AlbumsListComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    ArtistsRoutingModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
