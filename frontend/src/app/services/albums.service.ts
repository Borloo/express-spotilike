import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlService} from "./url.service";
import {catchError, Observable, pipe, tap} from "rxjs";
import {Album} from "../beans/album";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private readonly http: HttpClient,
    private readonly url_service: UrlService
  ) { }

  get_albums(): Observable<Album[]>{
    return this.http.get<Album[]>(this.url_service.get_albums_routes().get_albums)
      .pipe(
        tap(data => console.log('Albums', JSON.stringify(data))),
        catchError(this.url_service.handle_error)
      );
  }
}
