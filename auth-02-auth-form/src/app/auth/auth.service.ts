import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}
  signup<AuthResponseData>(email: string, password: string) {
    //AuthResponseData tells Post the format of data
    return this.http
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCQPb_DZC1Ls5oFCTgpy6zCxTZJe17kbBE",
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(errResp => {
          let errorMessage = "An Unknown Error Occured";
          if (!errResp.error || !errResp.error.error) {
            return throwError(errorMessage);
          }
          switch (errResp.error.error.message) {
            case "EMAIL_Exists":
              errorMessage = "This email exists already ";
          }
          return throwError(errorMessage);
        })
      );
  }

  login(email: string, password: string) {
   return this.http.post<AuthResponseData>(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCQPb_DZC1Ls5oFCTgpy6zCxTZJe17kbBE",
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
        catchError(errResp => {
            console.log(errResp)
          let errorMessage = "An Unknown Error Occured";
          if (!errResp.error || !errResp.error.error.errors[0]) {
            return throwError(errorMessage);
          }
          switch (errResp.error.error.errors[0].message) {
            case "EMAIL_NOT_FOUND":
              errorMessage = "This user dosent Exits";
          }
          return throwError(errorMessage);
        })
      );
  }
}
