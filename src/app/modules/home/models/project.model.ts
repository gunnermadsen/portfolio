export interface IProject {
    name: string
    description: string
    url: string
    type: string
    githubUrl: string
    alternative: string
    technologies: {
        FrontEnd: string[]
        BackEnd: string[]
    }
    image: string
}