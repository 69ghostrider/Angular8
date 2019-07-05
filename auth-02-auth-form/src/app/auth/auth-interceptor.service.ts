import { AuthService } from './auth.service';
import { exhaustMap, take } from "rxjs/operators";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpParams
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class AuthIntercepting implements HttpInterceptor {
    
  constructor(private authService: AuthService) {console.log("inside interceptor")}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req);
    const currentUser= this.authService.user;
    console.log(currentUser)
    if(currentUser && currentUser.getValue().token){
        alert("Making a req")
      const modifiedReq = req.clone({
        params: new HttpParams().set("auth", currentUser.getValue().token)
      });
      return next.handle(modifiedReq);
    }
  }
}
