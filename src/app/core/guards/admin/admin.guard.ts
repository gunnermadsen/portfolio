import { Injectable, Inject, PLATFORM_ID, Injector } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { APP_BASE_HREF, isPlatformBrowser, isPlatformServer, DOCUMENT } from '@angular/common'
import { Router } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: object, private injector: Injector) {}

  public canActivate(): boolean {

    if (isPlatformBrowser(this.platformId)) {

      console.log(this.document.location.hostname)

      if (this.document.location.hostname === 'admin.gunner-madsen.com') {
        return true
      }

    }
    
    this.router.navigateByUrl('/notfound')
    return false

  }
   
}
