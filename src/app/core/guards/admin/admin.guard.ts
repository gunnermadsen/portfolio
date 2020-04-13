import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { CanActivate } from '@angular/router'
import { isPlatformBrowser, DOCUMENT } from '@angular/common'
import { Router } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: object) {}

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
