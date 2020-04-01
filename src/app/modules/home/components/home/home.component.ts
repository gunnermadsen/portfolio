import { Component, OnInit, isDevMode } from '@angular/core'
import { MatDialogConfig, MatDialog } from '@angular/material/dialog'
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component'
import { IProject } from '../../models/project.model'
import getProjects from '../../../../core/mocks/projects'

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

    this.projects = getProjects(this.url)
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

}
