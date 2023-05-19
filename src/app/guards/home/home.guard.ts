import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  ABS_ACCOUNT_LOGIN,
  ABS_LAYOUT,
} from 'src/app/constants/absolute-routes';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = sessionStorage.getItem('token');
    console.log(token);
    if (token) {
      return true;
    } else {
      return this._router.navigate([ABS_ACCOUNT_LOGIN.fullUrl]);
    }
  }
}
