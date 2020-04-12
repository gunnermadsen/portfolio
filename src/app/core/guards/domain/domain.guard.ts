import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class DomainGuard implements CanActivate {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {}

  public canActivate(): boolean {

    console.log(location.hostname)

    if (isPlatformBrowser(this.platformId)) {
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

      return true
    }

  }
  
}
