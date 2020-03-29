import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './modules/home/components/home/home.component'
import { AboutMeComponent } from './modules/home/components/about-me/about-me.component'
import { NotFoundComponent } from './modules/home/components/not-found/not-found.component'
import { ArticlesComponent } from './modules/home/components/articles/articles.component'
import { ContactComponent } from './modules/home/components/contact/contact.component'
import { DashboardComponent } from './modules/admin/components/dashboard/dashboard.component'
import { AdminPathGuard } from './core/guards/admin-guard/admin-guard.guard'

const routes: Routes = [
  {
    path: '',
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
    path: 'dashboard',
    loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule),
    canActivate: [AdminPathGuard],
    component: DashboardComponent
  },
  // {
  //   path: '',
  //   redirectTo: 'projects',
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
