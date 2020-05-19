import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

interface IUser {
    UserName: string, 
    Password: string
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private _isAuthenticated$ = new Subject<boolean>()

    public get isAuthenticated$(): Observable<boolean> {
        return this._isAuthenticated$.asObservable()
    }
    
    constructor(private http: HttpClient, private snackbar: MatSnackBar, private router: Router, @Inject(PLATFORM_ID) private platformId: object) {}

    public authenticateAccount(user: IUser): Observable<any> {
        return this.http.post(`${environment.apiUrl}/api/users/login`, user).pipe(
            tap(response => {
                if (isPlatformBrowser(this.platformId)) {
                    localStorage.setItem('Account', JSON.stringify(response))
                    this.router.navigateByUrl('/dashboard/main')
                    this._isAuthenticated$.next(true)
                }
            }),
            catchError(response => {
                this.displaySnackbarMessage(response.error.message)
                return throwError(response)
            })
        )
    }

    public logout() {
        return this.http.get(`${environment.apiUrl}/api/users/logout`).pipe(
            tap(() => localStorage.removeItem('Account')),
            tap(() => this.displaySnackbarMessage("You have logged out successfully"))
        )
    }

    private displaySnackbarMessage(message: string) {

        this.snackbar.open(message, 'close')

    }
}