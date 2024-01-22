import {Component, Input} from '@angular/core';
import {Subscription} from "rxjs";
import {Artist} from "../../beans/artist";
import {ActivatedRoute} from "@angular/router";
import {ArtistService} from "../../services/artist.service";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent {
@Input()
  artist!: Artist | undefined;

constructor(private artistService: ArtistService,
            private route: ActivatedRoute) { }


  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      if (params.has('id')){
        let idArtist = params.get('id');
        if (idArtist != null){
          this.artistService.getById(parseInt(idArtist)).subscribe(resArtist => {
            this.artist = resArtist;
          })
        }
      }
    })
  }
}

