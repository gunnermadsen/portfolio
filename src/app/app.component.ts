import { Component } from '@angular/core'
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  public state: boolean[] = [ false, false, false, false ]

  constructor(private _breakpointObserver: BreakpointObserver) {

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