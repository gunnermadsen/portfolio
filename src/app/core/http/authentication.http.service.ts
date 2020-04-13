import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, catchError, tap } from 'rxjs/operators';
import { MatSnackBarConfig, MatSnackBar, MatSnackBarContainer } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface IUser {
    UserName: string, 
    Password: string
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private snackbarConfig: MatSnackBarConfig

    private _isAuthenticated$ = new Subject<boolean>()

    public get isAuthenticated$(): Observable<boolean> {
        return this._isAuthenticated$.asObservable()
    }
    
    constructor(private http: HttpClient, private snackbar: MatSnackBar, private router: Router) {
        this.snackbarConfig = new MatSnackBarConfig()
        this.snackbarConfig.duration = 5000
    }

    public authenticateAccount(user: IUser): Observable<any> {
        return this.http.post(`${environment.apiUrl}/api/users/login`, user).pipe(
            tap(response => {
                localStorage.setItem('Account', JSON.stringify(response))
                this.router.navigateByUrl('/dashboard/main')
                this._isAuthenticated$.next(true)
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

        this.snackbar.open(message, 'close', this.snackbarConfig)

    }
}