import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/http/authentication.http.service';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  public logout() {
    this.authenticationService.logout().pipe(take(1)).subscribe()
    this.router.navigateByUrl('/login')
  }

}
