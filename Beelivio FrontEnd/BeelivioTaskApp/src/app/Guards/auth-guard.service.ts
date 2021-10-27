import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
@Injectable({  providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { } 
     canActivate(    route: ActivatedRouteSnapshot,    state: RouterStateSnapshot)
     : Observable<boolean | UrlTree>| Promise<boolean | UrlTree> | boolean | UrlTree { 
          const isLoggedIn: boolean = this.authService.isLoggedIn();    
          if (!isLoggedIn)      
          this.router.navigateByUrl('Auth/login');    
          return isLoggedIn;  }}
          
  @Injectable({  providedIn: 'root'})
  export class AuthGuardChild implements CanActivateChild { 
     constructor(private router: Router, private authService: AuthService) { }  
     canActivateChild(    route: ActivatedRouteSnapshot,    state: RouterStateSnapshot)
     : Observable<boolean | UrlTree>| Promise<boolean | UrlTree> | boolean | UrlTree {
  const isLoggedIn: boolean = this.authService.isLoggedIn();    
  if (!isLoggedIn)      
  this.router.navigateByUrl('Auth/login');    
  return isLoggedIn;  }}
