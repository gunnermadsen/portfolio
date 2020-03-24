import { Component, OnInit, isDevMode } from '@angular/core'
import { MatDialogConfig, MatDialog } from '@angular/material'
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component'
import { of, Observable } from 'rxjs'
import { take, debounceTime, tap } from 'rxjs/operators'
import { IProject } from '../../models/project.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public projects: IProject[]
  public hovering: boolean[] = []
  public url: string
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.url = isDevMode() ? 'http://localhost:4200' : 'https://www.gunner-madsen.com'

    this.projects = this.getProjects()
  }

  public routeToExternalSite(url: string): void {
    window.open(url, "_blank")
  }

  public openProjectDialog(id: number): void {
    const config = new MatDialogConfig()

    config.data = {
      project: this.projects[id]
    }

    config.width = '500px'

    const openDialog = this.dialog.open(ProjectDialogComponent, config)
    
  }

  private getProjects(): IProject[] {

    return [
      {
        name: 'Mindful Meals',
        description: 'Mindful Meals makes it easy to track grocery items in your pantry, and will suggest recipes for pantry items, while helping to reduce the amount of food you throw away.',
        url: 'https://mindfulmeals.herokuapp.com',
        type: 'Web Application',
        githubUrl: 'https://github.com/gunnermadsen/mindfulmeals',
        alternative: "Healthy pizza choice for describing Mindful Meals",
        technologies: {
          FrontEnd: [
            'Angular 8',
            'NgRx 8',
            'RxJS 6.5',
            'TypeScript',
            'Angular Material',
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
        image: `${this.url}/assets/MindfulMeals-Project.jpg`
      },
      {
        name: 'Coolshare',
        description: 'A clone of Dropbox, the well-known file sharing application.',
        url: 'https://coolshare.herokuapp.com',
        type: 'Web Application',
        githubUrl: 'https://github.com/gunnermadsen/coolshare',
        alternative: "Web-based file sharing application",
        technologies: {
          FrontEnd: [
            'Angular 8',
            'TypeScript',
            'RxJS 6.5',
            'NgRx 8',
            'Angular Material',
            'Bootstrap 4',
            'CSS3',
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
        image: `${this.url}/assets/Coolshare-Project.jpg`
      },
      {
        name: 'Meetily',
        description: 'A collaboration tool that features videoconferencing, screensharing and messaging for an all inclusive collaboration experience',
        url: "https://meetily.herokuapp.com",
        // url: "https://www.meetilly.com",
        type: 'Web Application',
        githubUrl: null,
        alternative: "Videoconferencing and collaboration tool in your browser",
        technologies: {
          FrontEnd: [
            'Angular 8',
            'NgRx 8',
            'RxJS 6.5',
            'TypeScript',
            'WebRTC',
            'SocketIO Client',
            'Angular Material',
            'Bootstrap 4',
            'CSS3',
            'HTML5',
          ],
          BackEnd: [
            'Angular Universal SSR',
            'Webpack',
            'NodeJS',
            'ExpressJS',
            'MongoDB',
            'Mongoose/Typegoose',
            'SocketIO'
          ]
        },
        image: `${this.url}/assets/Meetily-Project.jpg`
      },
      // {
      //   name: 'Cafe Finder',
      //   description: 'An app for finding coffee shops enroute to a destination.',
      //   url: '',
      // technologies: [

      // ],   
      // image: 'https://via.placeholder.com/210x150'
      // },
      // {
      //   name: 'KeyFocus',
      //   description: 'Keyfocus is a scheduling tool for creating and scheduling meetings with others. ',
      //   url: 'http://dev01.keyfocus.io',
      //   type: 'Web Application',
      //   githubUrl: null,
      //   alternative: "Meeting and collaboration tool",
      //   technologies: {
      //     FrontEnd: [
      //       'Angular 7',
      //       'TypeScript',
      //       'RxJS 6.5',
      //       'NgRx 7',
      //       'Angular Material',
      //       'Bootstrap 4',
      //       'CSS',
      //       'HTML5',

      //     ],
      //     BackEnd: [
      //       'ASP.NET Core Web API',
      //       'C#',
      //       'SendGrid',
      //       'SQL Server',

      //     ]
      //   },
      //   image: `${this.url}/assets/keyfocus-background.jpg`
      // },
      // {
      //   name: 'WebFS',
      //   description: 'WebFS is a web based file management application written in AngularJS, and the predecessor to Shareily.',
      //   url: null,
      //   type: 'Web Application',
      //   githubUrl: 'https://github.com/gunnermadsen/webfs',
      //   alternative: "Web-based file sharing application",
      //   technologies: {
      //     FrontEnd: [
      //       'AngularJS',
      //       'jQuery',
      //       'Jade Templating',
      //       'Bootstrap 4',
      //       'CSS3',
      //       'HTML5'
      //     ],
      //     BackEnd: [
      //       'Node JS',
      //       'ExpressJS MVC',
      //       'Multer'
      //     ]
      //   },
      //   image: `https://via.placeholder.com/210x133`
      // },
      // {
      //   name: 'Moving Calculator',
      //   description: 'An app for determining basic transportation costs for delivery drivers',
      //   url: '',
      // technologies: [

      // ], 
      // image: 'https://via.placeholder.com/210x150'
      // }
      {

        name: 'Whiteboarder',
        description: 'Whiteboarder is a tool used for drawing shapes and charts in the browser.',
        url: null,
        type: 'Web Application',
        githubUrl: 'https://github.com/gunnermadsen/whiteboarder',
        alternative: "Web based drawing application",
        technologies: {
          FrontEnd: [
            'Angular 8',
            'TypeScript',
            'RxJS 6.5',
            // 'NgRx 7',
            // 'Angular Material design',
            // 'Bootstrap 4',
            'CSS3',
            'HTML5'
          ],
          BackEnd: [
            'Not Applicable'
          ]
        },
        image: `https://via.placeholder.com/210x120`
      },
      {
        name: 'Streamly',
        description: 'Streamly is a Browser based music streaming app built with React Typescript, and Redux; and utilizes the Web Audio API to process audio from the server.',
        url: null,
        type: 'Web Application',
        githubUrl: 'https://github.com/gunnermadsen/streamly',
        alternative: "Web based music streaming application",
        technologies: {
          FrontEnd: [
            'React',
            'Redux',
            'Web Audio API',
            'TypeScript',
            'RxJS 6.5',
            'Webpack 4',
            'Material UI',
            'SCSS',
            'HTML5'
          ],
          BackEnd: [
            'Not Applicable'
          ]
        },
        image: `https://via.placeholder.com/210x120`
      },
      {

        name: 'Whiteboarder',
        description: 'Whiteboarder is a tool used for drawing shapes and charts in the browser.',
        url: null,
        type: 'Web Application',
        githubUrl: 'https://github.com/gunnermadsen/whiteboarder',
        alternative: "Web based drawing application",
        technologies: {
          FrontEnd: [
            'Angular 8',
            'TypeScript',
            'RxJS 6.5',
            // 'NgRx 7',
            // 'Angular Material design',
            // 'Bootstrap 4',
            'CSS3',
            'HTML5'
          ],
          BackEnd: [
            'Not Applicable'
          ]
        },
        image: `https://via.placeholder.com/210x120`
      },
      {
        name: 'Websheets',
        description: 'Web sheets is a web based spreadsheet application for creating, editing, and saving spreadsheet documents.',
        url: null,
        type: 'Web Application',
        githubUrl: 'https://github.com/gunnermadsen/websheets',
        alternative: "Web based spreadsheet application",
        technologies: {
          FrontEnd: [
            'Angular 8',
            'TypeScript',
            'RxJS 6.5',
            // 'NgRx 7',
            // 'Angular Material design',
            // 'Bootstrap 4',
            'CSS3',
            'HTML5'
          ],
          BackEnd: [
            'Not Applicable'
          ]
        },
        image: `https://via.placeholder.com/210x120`
      },
      {
        name: 'Portfolio API',
        description: 'My RESTful service used for managing the back end related features that my portfolio applications use',
        url: null,
        type: 'RESTful Web Service',
        githubUrl: 'https://github.com/gunnermadsen/portfolioapis',
        alternative: "Web Server back end for Gunner Madsen's Portfolio",
        technologies: {
          FrontEnd: [
            'Not Applicable'
          ],
          BackEnd: [
            'NodeJS',
            'ExpressJS',
            'MongoDB',
            'Mongoose/Typegoose',
            'Multer'
          ]
        },
        image: 'https://via.placeholder.com/210x120'
      }
    ]
  }
}
