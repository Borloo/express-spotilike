import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Artist} from "../../beans/artist";
import {ActivatedRoute} from "@angular/router";
import {ArtistService} from "../../services/artist.service";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit{

  error_message: string = "";
  sub!: Subscription;

  @Input()
  artist!: Artist;

constructor(private artistService: ArtistService,
            private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        let idArtist = params.get('id');
        if (idArtist != null) {
          this.set_artist(idArtist);
        }
      }
    });
  }

  private set_artist(artist_id: string): void{
    this.sub = this.artistService.get_by_id(artist_id).subscribe({
      next: artist => {
        this.artist = artist;
      },
      error: err => this.error_message = err
    })
  }
}

