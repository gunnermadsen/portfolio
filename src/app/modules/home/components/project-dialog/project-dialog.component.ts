import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {

  public project: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.project = data.project;
  }

  ngOnInit() {
  }

  public routeToExternalSite(url: string): void {
    window.open(url, "_blank");
  }

}
