import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './modules/home/components/home/home.component';
import { AboutMeComponent } from './modules/home/components/about-me/about-me.component';
import { NotFoundComponent } from './modules/home/components/not-found/not-found.component';
import { ArticlesComponent } from './modules/home/components/articles/articles.component';
import { ContactComponent } from './modules/home/components/contact/contact.component';

const routes: Routes = [
  {
    path: 'projects',
    component: HomeComponent
  },
  {
    path: 'aboutme',
    component: AboutMeComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
