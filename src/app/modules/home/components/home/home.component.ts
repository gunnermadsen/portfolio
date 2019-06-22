import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projects: any[];
  public url: string;
  constructor() {
    this.url = isDevMode() ? 'http://localhost:4200' : 'https://www.gunner-madsen.com';
  }

  ngOnInit() {

    this.projects = [
      {
        name: 'Mindful Meals',
        description: 'Mindful Meals facilitates tracking grocery items in your pantry, suggests recipes for pantry items, and helps to reduce the amount of food you consume.',
        url: '',
        image: `${this.url}/assets/mindful-meals_background.png`
      },
      {
        name: 'CoolShare',
        description: 'A clone of the well-known dropbox file sharing application.',
        url: '',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      },
      {
        name: 'Cafe Finder',
        description: 'An app for finding coffee shops enroute to a destination.',
        url: '',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      },
      {
        name: 'KeyFocus',
        description: 'Keyfocus is a productivity tool for managing communications with others. Its streamlined workflow expedites the meeting creation process, and its intuitive user interface facilities fast correspondance.',
        url: '',
        image: `${this.url}/assets/keyfocus-background.jpg`
      },
      {
        name: 'Moving Calculator',
        description: 'An app for determining basic transportation costs for delivery drivers',
        url: '',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
      }
    ]

  }

}
