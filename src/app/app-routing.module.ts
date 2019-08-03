import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './modules/home/components/home/home.component';
import { AboutMeComponent } from './modules/home/components/about-me/about-me.component';

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
    path: '**',
    redirectTo: 'projects'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
