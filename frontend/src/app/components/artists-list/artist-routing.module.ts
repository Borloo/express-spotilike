import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArtistsListComponent} from "./artists-list.component";
import {ArtistDetailComponent} from "../artist-detail/artist-detail.component";

const routes: Routes = [
  {
    path: 'artist',
    children: [
      {path: 'detail/:id', component: ArtistDetailComponent, pathMatch: 'full'},
      {path: 'list', component: ArtistsListComponent, pathMatch: 'full'},
      {redirectTo: 'list', path: '', pathMatch: 'full'}
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ArtistsRoutingModule {
}
