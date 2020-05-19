import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './modules/home/components/home/home.component'
import { MaterialModule } from './material.module'
import { ProjectDialogComponent } from './modules/home/components/project-dialog/project-dialog.component'
import { AboutMeComponent } from './modules/home/components/about-me/about-me.component'
import { NotFoundComponent } from './modules/home/components/not-found/not-found.component'
import { ArticlesComponent } from './modules/home/components/articles/articles.component'
import { ContactComponent } from './modules/home/components/contact/contact.component'
import { CardHoverDirective } from './modules/home/directives/card-hover/card-hover.directive'
import { ImageHoverDirective } from './modules/home/directives/image-hover/image-hover.directive'
import { LoginComponent } from './modules/home/components/login/login.component'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectDialogComponent,
    LoginComponent,
    NotFoundComponent,
    AboutMeComponent,
    ArticlesComponent,
    ContactComponent,
    CardHoverDirective,
    ImageHoverDirective
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
  ],
  entryComponents: [ProjectDialogComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide:  MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 5000 }
    }
  ]
})
export class AppModule { }
