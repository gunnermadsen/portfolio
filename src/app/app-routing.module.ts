import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './modules/home/components/home/home.component'
import { AboutMeComponent } from './modules/home/components/about-me/about-me.component'
import { NotFoundComponent } from './modules/home/components/not-found/not-found.component'
import { ArticlesComponent } from './modules/home/components/articles/articles.component'
import { ContactComponent } from './modules/home/components/contact/contact.component'
import { DashboardComponent } from './modules/admin/components/dashboard/dashboard.component'
import { LoginComponent } from './modules/home/components/login/login.component'
import { DomainGuard } from './core/guards/domain/domain.guard'
import { AdminGuard } from './core/guards/admin/admin.guard'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [DomainGuard]
  },
  {
    path: 'aboutme',
    component: AboutMeComponent,
    canActivate: [DomainGuard]
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    canActivate: [DomainGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [DomainGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule),
    canActivate: [AdminGuard]
  },
  // {
  //   path: '',
  //   redirectTo: 'projects',
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: []
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
