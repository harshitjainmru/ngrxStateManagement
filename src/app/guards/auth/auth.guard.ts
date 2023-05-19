import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ABS_ACCOUNT_LOGIN, ABS_LAYOUT, ABS_LAYOUT_HOME } from 'src/app/constants/absolute-routes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if (sessionStorage.getItem('token')) {
        return this._router.navigate([ABS_LAYOUT.fullUrl]);
      }
      return true;


  }

}
