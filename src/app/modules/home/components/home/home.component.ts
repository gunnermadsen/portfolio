import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projects: any[];
  public hovering: boolean[] = [];
  public url: string;
  constructor() {
    this.url = isDevMode() ? 'http://localhost:4200' : 'https://www.gunner-madsen.com';
  }

  ngOnInit() {

    this.projects = [
      {
        name: 'Mindful Meals',
        description: 'Mindful Meals facilitates tracking grocery items in your pantry, suggests recipes for pantry items, and helps to reduce the amount of food you consume.',
        url: 'https://mindfulmeals.herokuapp.com',
        image: `${this.url}/assets/mindful-meals_background.png`
      },
      {
        name: 'Shareily',
        description: 'A clone of Dropbox, the well-known file sharing application.',
        url: 'https://www.shareily.com',
        image: 'https://via.placeholder.com/210x150'
      },
      // {
      //   name: 'Cafe Finder',
      //   description: 'An app for finding coffee shops enroute to a destination.',
      //   url: '',
      //   image: 'https://via.placeholder.com/210x150'
      // },
      {
        name: 'KeyFocus',
        description: 'Keyfocus is a productivity tool for managing communications with others. Its streamlined workflow expedites the meeting creation process, and its intuitive user interface facilities fast correspondance.',
        url: 'https://dev01.keyfocus.io',
        image: `${this.url}/assets/keyfocus-background.jpg`
      },
      // {
      //   name: 'Moving Calculator',
      //   description: 'An app for determining basic transportation costs for delivery drivers',
      //   url: '',
      //   image: 'https://via.placeholder.com/210x150'
      // }
    ]

  }

  public routeToExternalSite(url: string): void {
    window.open(url, "_blank");
  }

}
