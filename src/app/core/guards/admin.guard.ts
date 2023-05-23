import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router
  ) {
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var is_superuser = localStorage.getItem('is_superuser') == "true" ? true : false;
      if (is_superuser) {
        return true;
      }
      else if (localStorage.getItem('user_type') == 'admin') {
        return true;
      }
      else {
        this.router.navigate(['/']);
        return false;
      }
  }
  
}
