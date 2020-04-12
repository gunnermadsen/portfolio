import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { APP_BASE_HREF, isPlatformBrowser } from '@angular/common'
import { Router } from '@angular/router'
import { platformBrowser } from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class AdminPathGuard implements CanActivate {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {}

  public canActivate(): boolean {

    if (isPlatformBrowser(this.platformId)) {

      console.log(location.hostname)
      
      if (location.hostname === 'admin.gunner-madsen.com') {
  
        return true
      }
  
      this.router.navigateByUrl('/notfound')
      
      return false
    }
  }
   
}
