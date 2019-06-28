import { Observable } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;   // storing observable data

  constructor() {
  }
                  //Observable will be loaded only on Home page
  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {    //storing the subscription
    //   console.log(count);   
    // });

    const customIntervalObservable = Observable.create( observer => {
      let count = 0;
      // setInterval(() =>{
      //    observer.next(count);
      //    count++;
      //  } ,1000)
     }
    )
    this.firstObsSubscription= customIntervalObservable.subscribe(data => {
      console.log(data) 
    }
      );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();  //destroying subscription  
  }

}
