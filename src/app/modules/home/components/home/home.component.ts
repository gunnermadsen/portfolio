import { Component, OnInit, isDevMode } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { projects } from 'src/app/core/mocks/projects.mocks';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public projects: any[];
  public hovering: boolean[] = [];
  public url: string;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {

    this.url = isDevMode() ? 'http://localhost:4200' : 'https://www.gunner-madsen.com';

    this.projects = projects
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
