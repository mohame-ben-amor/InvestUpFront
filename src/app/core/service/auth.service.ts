import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Constants } from "../utils/constants";

//Soit testaaml Injectable ou bien t'hot esm service dans le tableau du providers dans le fichier app.module
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<{ "accessToken": string, "user": User }>;
  //public currentUser: Observable<{ "accessToken": string, "user": User }>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<{ "accessToken": string, "user": User }>(
      JSON.parse(localStorage.getItem('currentUser'))
    );

    //  this.currentUser = this.currentUserSubject.asObservable();
  }

  public get getCurrentUserValue(): { "accessToken": string, "user": User } {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(Constants.APP_PORT + Constants.LOGIN_ENDPOINT + "/login", {
        email,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.clear();
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          console.log(localStorage.getItem('currentUser'));
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    this.currentUserSubject.next(null);
    return of({ success: false });
  }
}
