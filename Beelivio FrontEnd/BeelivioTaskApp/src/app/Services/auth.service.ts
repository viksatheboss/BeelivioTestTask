import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { JWTModel } from 'src/app/Models/JWTModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn() {
    const token = this.getAuthToken();

    if (token === null || token === undefined)
      return false;

    if (this.isTokenExpired(token))
      return false;

    return true;
  }

  public getAuthToken(): string |null{
    return localStorage.getItem("AuthToken");
  }

  public isTokenExpired(token: string) {
    let decodedToken: JWTModel = jwt_decode(token);
    //const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    const expiry = decodedToken.exp * 1000;

    return (Math.floor((new Date).getTime()) >= expiry)
  }
}



