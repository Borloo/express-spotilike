import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../../services/albums.service";
import {Album} from "../../beans/album";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit{

  error_message: string = "";
  sub!: Subscription;

  album!: Album;
  album_id: string = '';

  constructor(private albumService: AlbumsService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe({
      next: params => {
        if (params.has('id')) {
          let id_album = params.get('id');
          if (id_album != null) {
            this.album_id = id_album;
          }
        }
      },
      error: err => this.error_message = err
    });
    this.set_album();
  }

  private set_album(): void{
    this.sub = this.albumService.get_by_id(this.album_id).subscribe({
      next: album => {
        this.album = album;
      },
      error: err => this.error_message = err
    })
  }

}
