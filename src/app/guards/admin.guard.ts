import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {

  // This is used for the inject the authServices..
  constructor(private authService:AuthService){}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let status = this.authService.activeChildStatus();

      if(status){
        console.log("You Are Authentic User ::: ");
      }else{
        window.alert("You Are Not Authentic User So You Can Not Access This Ruotes!");
      }

    // This is used for the api called return if true then access the route otherwise not access the route
    return status;
  }

}
