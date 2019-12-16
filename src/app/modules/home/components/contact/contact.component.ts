import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public socialMedia: any[] = []
  public server: string
  constructor() {
    this.server = isDevMode() ? 'http://localhost:4200' : 'https://www.gunner-madsen.com'
  }

  ngOnInit() {
    this.socialMedia = [
      { 
        name: 'LinkedIn', 
        image: `${this.server}/assets/linkedin-mark.png`, 
        link: 'https://linkedin.com/in/gunnermadsen',
        style: 'linkedin social-button'
      },
      { 
        name: 'Github', 
        image: `${this.server}/assets/github-mark.png`, 
        link: 'https://github.com/gunnermadsen',
        style: 'github social-button'
      },
      {
        name: 'Facebook',
        image: `${this.server}/assets/facebook-mark.png`,
        link: 'https://www.facebook.com/gunner.madsen',
        style: 'facebook social-button'
      }
    ]
  }

  public navigate(link: string): void {
    window.open(link, '_blank')
  }

}
