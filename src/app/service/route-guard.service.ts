import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService,
    private router: Router) {

  }

// we create a can activate method which make checks if user is logged in we then add this can activate to all our routes. This enables routing protection if the user is not logged in they wont be able to access some routes.

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.basicAuthenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);

    return false;
  }
}
