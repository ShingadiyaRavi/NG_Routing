import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanDeactivate<unknown> {

  // This is used for the use a auth service.
  constructor(private authService:AuthService){}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      let status = this.authService.deActiveStatus();

      if(status){
        console.log("You Are Authentic User ::: ");
      }else{
        window.alert("Are You Want To Go There ?");
      }

    return status;
  }

}
