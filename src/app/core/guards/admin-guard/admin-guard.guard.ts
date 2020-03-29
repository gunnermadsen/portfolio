import { Injectable, Inject } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { APP_BASE_HREF } from '@angular/common'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AdminPathGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(location.hostname)

    if (location.hostname === 'admin.gunner-madsen.com') {
      return true
    }

    this.router.navigateByUrl('/notfound')
    
    return false
  }
  
}
