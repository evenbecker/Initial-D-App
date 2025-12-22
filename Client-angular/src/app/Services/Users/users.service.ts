import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../Environments/myEnvironment';
import { Observable } from 'rxjs';
import { Credentials } from '../../Models/credentials';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { tokenGetter } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  LogStatus:boolean = false;

  constructor(private http: HttpClient,private jwtHelper: JwtHelperService) { }


  PostLogin(credentials: Credentials): Observable<Credentials> {
    return this.http.post<Credentials>(environment.ServerUrl+"/api/User/Login", credentials, { responseType: 'json' });
  }

  LogOut(){
    localStorage.removeItem('jwt'); // Remove the JWT token from storage
    this.LogStatus = false; // Update the LoggedIn flag
  }

  IsUserAuthenticated() {
    const token = tokenGetter();

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      this.LogStatus=true
      return this.LogStatus;
    }
    this.LogStatus = false;
    return this.LogStatus;
  }
  


}
