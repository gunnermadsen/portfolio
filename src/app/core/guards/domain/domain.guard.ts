import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DomainGuard implements CanActivate {

  constructor(private router: Router) {}

  public canActivate(next: ActivatedRouteSnapshot,  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (location.hostname === 'admin.gunner-madsen.com') {

      const account = localStorage.getItem('Account')

      if (account) {
        return true
      }
      else {
        this.router.navigateByUrl('/login')
        return false
      }

    }

    // this.router.navigateByUrl('/')

    return true

  }
  
}
