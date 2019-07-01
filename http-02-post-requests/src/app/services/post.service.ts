import { map, catchError } from "rxjs/operators";
import { Post } from "./../post.model";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class PostService {
  public error = new Subject<string>();  
  constructor(private http: HttpClient) {}
  createAnsdStorePosts(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post(
        "https://ng-complete-guide-9cdc2.firebaseio.com/posts.json",
        postData
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

  fetchPostData() {
    //   let searchparams = new HttpParams();
    //   searchparams= searchparams.append('parama1','value');
    //   searchparams= searchparams.append('parama2','value');  //used to append custom params
    return this.http
      .get<{ [key: string]: Post }>(
        "https://ng-complete-guide-9cdc2.firebaseio.com/posts.json",
        {
           headers:new HttpHeaders({'Custom-Header':'Hello'}),  //adding a custom header // can ser as many as you want
           params:new HttpParams().set('print','pretty')
        }
      ) //<> (optional) shows the type response will return
      .pipe(
        map(responseData => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        }),
        catchError(errorRes => {
        
         return throwError(errorRes);    // used to handle generic erro handling if we have some tasks if erro occurs
        })
      );
    // .subscribe(posts => {
    //   //this.ifFetchLoader = false;  //subscribe in App component so that data can be accessed
    //  // this.loadedPosts = posts;
    // });
  }

  deletePostData() {
    return this.http.delete(
      //if we dont put return then we cant subscribe in app.component.ts
      "https://ng-complete-guide-9cdc2.firebaseio.com/posts.json"
    );
  }
}
