import { Injectable } from '@angular/core';
import {AppService} from "./app.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private api_url = this.app_service.get_api_url();

  private artist_route = {
    get_artists: `${this.api_url}artists`,
    get_artists_song: `${this.api_url}artists/{id}/songs`,
    put_artists: `${this.api_url}artists/{id}`,
    delete_artists: `${this.api_url}artists/{id}`,
  }

  constructor(
    private readonly app_service: AppService
  ) { }

  get_artists_routes(){
    return this.artist_route;
  }

  handle_error(err: HttpErrorResponse): Observable<never>{
    let error_message: string = "";
    if (err.error instanceof ErrorEvent){
      error_message = `Server return code ${err.status}, error message is: ${err.message}`;
    }
    console.error(error_message)
    return throwError(() => error_message);
  }
}
