import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})


// we are logging out the user in this component. we call the logout function which removes the user name and the auth token from session storage.
export class LogoutComponent implements OnInit {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService)
   { }

  ngOnInit() {
    this.basicAuthenticationService.logout();
  }

}
