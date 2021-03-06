import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, Subject, BehaviorSubject } from "rxjs";

import { User } from "./user.model";

export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({ providedIn: "root" })
export class AuthService {
  //user = new Subject<User>();  //user is accessible throuout the appn
  user = new BehaviorSubject<User>(null);  //Same as Subject but gives access to the currently created data                                        // like a new user token can be used in API to fetch data on the go
  constructor(private http: HttpClient) {
      
  }
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCQPb_DZC1Ls5oFCTgpy6zCxTZJe17kbBE",
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
      alert("in login")
    return this.http
      .post<AuthResponseData>(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCQPb_DZC1Ls5oFCTgpy6zCxTZJe17kbBE",
        {
          email: email,
          password: password,
          returnSecureToken: true     //these are params expected by firebase API
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
            console.log("Response")
            console.log(resData)
          this.handleAuthentication(
            resData.email,
            resData.localId,         
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  private handleAuthentication(email: string,userId: string,token: string,expiresIn: number) 
  {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    console.log("USER")
    console.log(user)
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = "An unknown error occurred!";
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case "EMAIL_EXISTS":
        errorMessage = "This email exists already";
        break;
      case "EMAIL_NOT_FOUND":
        errorMessage = "This email does not exist.";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "This password is not correct.";
        break;
    }
    return throwError(errorMessage);
  }
}
