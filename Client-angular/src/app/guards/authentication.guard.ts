/*
import { CanActivateFn } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  return true;
};
*/
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private jwtHelper: JwtHelperService) {}
  canActivate() {
    const token = tokenGetter();

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    this.router.navigate(['NotAuthorized']);
    return false;
  }
}
