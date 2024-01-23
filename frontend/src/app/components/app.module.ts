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
import {AccountRoutingModule} from "./account/account-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./account/login/login.component";
import { HomeComponent } from './home/home.component';
import {HomeRoutingModule} from "./home/home-routing.module";
import {ArtistsRoutingModule} from "./artists-list/artists-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ArtistsListComponent,
    AlbumsListComponent,
    ArtistDetailComponent,
    FooterComponent,
    AlbumsListComponent,
    NavigationComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AccountRoutingModule,
    HomeRoutingModule,
    ArtistsRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
