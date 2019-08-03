import { Component, OnInit, isDevMode } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projects: any[];
  public hovering: boolean[] = [];
  public url: string;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {

    this.url = isDevMode() ? 'http://localhost:4200' : 'https://www.gunner-madsen.com';

    this.projects = [
      {
        name: 'Mindful Meals',
        description: 'Mindful Meals facilitates tracking grocery items in your pantry, suggests recipes for pantry items, and helps to reduce the amount of food you consume.',
        url: 'https://mindfulmeals.herokuapp.com',
        type: 'Web Application',
        githubUrl: 'https://github.com/gunnermadsen/mindfulmeals',
        technologies: {
          FrontEnd: [
            'Angular 8',
            'NgRx 8',
            'TypeScript 3.5',
            'Angular Material design',
            'Bootstrap 4',
            'CSS',
            'HTML5',

          ],
          BackEnd: [
            'Angular Universal SSR',
            'Webpack',
            'NodeJS',
            'ExpressJS',
            'MongoDB',
            'Mongoose/Typegoose',
          ]
        },
        image: `${this.url}/assets/mindful-meals_background.jpg`
      },
      {
        name: 'Shareily',
        description: 'A clone of Dropbox, the well-known file sharing application.',
        url: 'https://www.shareily.com',
        type: 'Web Application',
        githubUrl: 'https://github.com/gunnermadsen/coolshare',
        technologies: {
          FrontEnd: [
            'Angular 8',
            'RxJS 6.5',
            'NgRx 8',
            'Angular Material design',
            'Bootstrap 4',
            'CSS',
            'HTML5',

          ],
          BackEnd: [
            'Angular Universal SSR',
            'Webpack',
            'NodeJS',
            'ExpressJS',
            'MongoDB',
            'Mongoose/Typegoose',
            'Multer'
          ]
        },
        image: 'https://via.placeholder.com/210x133'
      },
      // {
      //   name: 'Cafe Finder',
      //   description: 'An app for finding coffee shops enroute to a destination.',
      //   url: '',
      // technologies: [

      // ],   
      // image: 'https://via.placeholder.com/210x150'
      // },
      {
        name: 'KeyFocus',
        description: 'Keyfocus is a productivity tool for managing communications with others. Its streamlined workflow expedites the meeting creation process, and its intuitive user interface facilities fast correspondance.',
        url: 'http://dev01.keyfocus.io',
        type: 'Web Application',
        githubUrl: null,
        technologies: {
          FrontEnd: [
            'Angular 7',
            'NgRx 7',
            'Angular Material design',
            'Bootstrap 4',
            'CSS',
            'HTML5',

          ],
          BackEnd: [
            'ASP.NET Core Web API',
            'C#',
            'SendGrid',
          ]
        },
        image: `${this.url}/assets/keyfocus-background.jpg`
      },
      // {
      //   name: 'Moving Calculator',
      //   description: 'An app for determining basic transportation costs for delivery drivers',
      //   url: '',
      // technologies: [

      // ], 
      // image: 'https://via.placeholder.com/210x150'
      // }
    ]
  }

  public routeToExternalSite(url: string): void {
    window.open(url, "_blank");
  }

  public openProjectDialog(id: number): void {
    const config = new MatDialogConfig();

    config.data = {
      project: this.projects[id]
    }

    config.width = '500px';

    const openDialog = this.dialog.open(ProjectDialogComponent, config);
    
  }
}
