import { isDevMode } from '@angular/core';

let url = isDevMode() ? 'http://localhost:4200' : 'https://www.gunner-madsen.com';

export const projects = [
    {
        name: 'Mindful Meals',
        description: 'Mindful Meals makes it easy to track grocery items in your pantry, and will suggest recipes for pantry items, while helping to reduce the amount of food you throw away.',
        url: 'https://mindfulmeals.herokuapp.com',
        type: 'Web Application',
        githubUrl: 'https://github.com/gunnermadsen/mindfulmeals',
        technologies: {
            FrontEnd: [
                'Angular 8',
                'NgRx 8',
                'RxJS 6.5',
                'TypeScript',
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
        image: `${url}/assets/mindful-meals_background.jpg`
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
                'TypeScript',
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
        description: 'Keyfocus is a scheduling tool for creating and scheduling meetings with others. ',
        url: 'http://dev01.keyfocus.io',
        type: 'Web Application',
        githubUrl: null,
        technologies: {
            FrontEnd: [
                'Angular 7',
                'TypeScript',
                'RxJS 6.5',
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
                'SQL Server',

            ]
        },
        image: `${url}/assets/keyfocus-background.jpg`
    },
    // {
    //   name: 'Moving Calculator',
    //   description: 'An app for determining basic transportation costs for delivery drivers',
    //   url: '',
    // technologies: [

    // ], 
    // image: 'https://via.placeholder.com/210x150'
    // }
    {
        name: 'Websheets',
        description: 'Web sheets is a web based spreadsheet application for creating, editing, and saving spreadsheet documents.',
        url: null,
        type: 'Web Application',
        githubUrl: 'https://github.com/gunnermadsen/websheets',
        technologies: {
            FrontEnd: [
                'Angular 7',
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
        image: `https://via.placeholder.com/210x133`
    },
    {
        name: 'Portfolio API',
        description: 'My RESTful service used for managing the back end related features that my portfolio applications use',
        url: null,
        type: 'RESTful Web Service',
        githubUrl: 'https://github.com/gunnermadsen/portfolioapis',
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
        image: 'https://via.placeholder.com/210x133'
    },
]