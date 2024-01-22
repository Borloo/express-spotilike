import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UrlService} from "./url.service";
import {catchError, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private is_auth: boolean = false;

  constructor(
    private readonly http: HttpClient,
    private readonly url_service: UrlService
  ) { }

  login(email: string, password: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>(this.url_service.get_users_routes().post_user_login, {
      email,
      password
    }, httpOptions)
      .pipe(
        tap(data => console.log('Identified', JSON.stringify(data))),
        catchError(this.url_service.handle_error)
      );
  }
}
