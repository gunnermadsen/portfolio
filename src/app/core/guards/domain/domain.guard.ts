import { Injectable, Inject, PLATFORM_ID, Injector } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class DomainGuard implements CanActivate {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document, private injector: Injector, @Inject(PLATFORM_ID) private platformId: object) {}

  public canActivate(): boolean {

    if (isPlatformBrowser(this.platformId)) {

      console.log(this.document.location.hostname)

      if (this.document.location.hostname === 'admin.gunner-madsen.com') {
        this.router.navigateByUrl('/notfound')
        return false
      }

    }
    return true

  }
  
}
