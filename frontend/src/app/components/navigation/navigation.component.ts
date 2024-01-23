import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  protected is_auth: boolean = false;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.is_auth = this.authService.isLogged();
  }

}
