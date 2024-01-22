import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtistDetailComponent} from "./artist-detail/artist-detail.component";

const routes: Routes = [
  {path: 'artist/:id', component: ArtistDetailComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
