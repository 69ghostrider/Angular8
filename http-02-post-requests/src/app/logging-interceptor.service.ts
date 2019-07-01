import { tap } from 'rxjs/operators';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpInterceptor, HttpEventType } from '@angular/common/http';
export class LoggingInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log("Outgoing Request"+req.url)
        return next.handle(req).pipe(tap (event => {
            if(event.type === HttpEventType.Response){
                console.log('Incoming Response');
                console.log(event.body);
            }
        })); 
    }
}