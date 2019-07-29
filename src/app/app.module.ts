import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { MaterialModule } from './material.module';
import { ProjectDialogComponent } from './modules/home/components/project-dialog/project-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [ProjectDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
