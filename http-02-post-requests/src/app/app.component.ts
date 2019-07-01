import { Subject, Subscription } from 'rxjs';
import { PostService } from './services/post.service';
import { Post } from './post.model';
import { map, catchError } from "rxjs/operators";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit , OnDestroy{
  loadedPosts = [];
  ifFetchLoader = false;
  error=null;
  private errorSub : Subscription;
  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.postService.error.subscribe(errorMessage => {
     this.error = errorMessage;
    });

    this.ifFetchLoader = true;
    this.postService.fetchPostData().subscribe(posts =>{
    this.ifFetchLoader = false;
    this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
      });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAnsdStorePosts(postData.title,postData.content);
  }

  onFetchPosts() {
    this.ifFetchLoader = true;
    this.postService.fetchPostData().subscribe(posts =>{
    this.ifFetchLoader = false;
    this.loadedPosts = posts;
    }, error => {
    this.error = error.message;
    });
  }
  
  onHandleError(){
    this.error = null;
    this.ifFetchLoader=false;
  }
  onClearPosts() {
    // Send Http request
    this.postService.deletePostData().subscribe(() =>{
  this.loadedPosts=[];
    })
  }

  ngOnDestroy(){
    this.postService.error.unsubscribe()
  }
}
