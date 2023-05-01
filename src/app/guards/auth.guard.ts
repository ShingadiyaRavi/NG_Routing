import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  // This is used for the inject the service for the used all variabel and function.
  constructor(private authService:AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let status = this.authService.activeStatus();

      if(status){
        console.log("You Are Authentic User ::: ");
      }else{
        window.alert("You Are Not Authentic User So You Can Not Access This Ruotes!");
      }



    // This is used for the depend on service API called and authentication user status...
    return status;

    // This is used for check canActived is work or not.
    // return true;
  }

}
