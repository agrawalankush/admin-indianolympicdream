import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

import {  catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }
  login(loginform: any) {
    return this.http.post(`/api/login`, loginform, this.httpOptions).pipe(
      tap(res => this.storeTokenAndlogIn(res)),
      retry(1),
      catchError(this.handleError)
    );
  }
  get isLoggedIn() {
    const Token = localStorage.getItem('token');
    if (Token) {
      this.loggedIn.next(true);
    }
    return this.loggedIn.asObservable();
  }
  storeTokenAndlogIn(jwtres) {
    localStorage.setItem('token', jwtres.token);
    this.loggedIn.next(true);
  }
  removeTokenAndlogOut() {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    // this.router.navigate(['/login']);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);

      // return an observable with a user-facing error message
      return throwError(
        'Your network is playing tricks on you, please fix and try again!');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`);
      return throwError(
          'I screwed-up on my server somewhere, Please try again after sometime or report to me directly!');
        }
    }

}
