import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy{
  user: {id: number, name: string};
  paramsSubscription : Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user= {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
   this.paramsSubscription= this.route.params.subscribe(
      (params: Params) =>{
        this.user.id = params['id'];     //update whenever the URL paramenters change
        this.user.name = params['name'];
      } 
    );
  }
  
  ngOnDestroy(){                            //its handled automatically by angular ,dont have to write onDestroy
    this.paramsSubscription.unsubscribe();  //unscuscribing the subscriber as it will be still active in memory
  }
}
