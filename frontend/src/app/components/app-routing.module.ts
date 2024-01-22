import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'artist',
    loadChildren: () => import('./artists-list/artist-routing.module').then(a => a.ArtistsRoutingModule),
  },
  {path: '', redirectTo: 'artist/list', pathMatch: 'full'},
  {
    path: 'account',
    loadChildren: () => import('./account/account-routing.module').then(a => a.AccountRoutingModule),
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
