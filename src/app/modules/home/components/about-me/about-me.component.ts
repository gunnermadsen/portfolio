import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: [ './about-me.component.css', './about-me.component.scss' ]
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public scrollToTop(): void {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(this.scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  }

}
