import { Component, Inject, PLATFORM_ID } from '@angular/core'
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { DOCUMENT, isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  public state: boolean[] = [ false, false, false, false ]

  public isAdmin$: Observable<boolean>

  constructor(private _breakpointObserver: BreakpointObserver, @Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: object) {

    if (isPlatformBrowser(this.platformId)) {
      this.isAdmin$ = of(this.document.location.hostname).pipe(
        map((url: string) => url === 'admin.gunner-madsen.com' ? true : false)
      )
    }

    this._breakpointObserver
      .observe([
        '(max-width: 1200px)',
        '(max-width: 900px)',
        '(max-width: 600px)',
        '(max-width: 350px)'
      ])
      .subscribe(
        (state: BreakpointState) => 
          Object.values(state.breakpoints).map(
            (breakpoint: boolean, index: number) => 
              this.state[index] = breakpoint
          )
      )
  }
}