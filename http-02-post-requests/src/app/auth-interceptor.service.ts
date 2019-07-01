import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType
} from "@angular/common/http";
import { tap } from "rxjs/operators";
export class AuthInterceptorService implements  HttpInterceptor  {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
      console.log(req.url)
    // if(req.url === "https://ng-complete-guide-9cdc2.firebaseio.com/posts.json"){
    //   console.log("Blocking")      //if we want to do any specific thing on a url route
    //   return next.handle(req);     //return statement is important
    // }

    const modifyReq = req.clone({headers: req.headers.append('Custom-header',"123123")})
    console.log("Request is on its way");
    //return next.handle(modifyReq);   //intercept a request and do stuff , add in app.module
        //Always assign req object to a new object and clone it - return the cloned obj

        return next.handle(modifyReq).pipe(tap(event => {   //look into response and make changes
          if(event.type=== HttpEventType.Response){
              console.log("response body arrives")
              console.log(event.body)
          }
        }));
  }
}
