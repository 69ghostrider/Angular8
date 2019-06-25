import { AccountsService } from './accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers:[AccountsService]   // Declared globally in app.module.ts
})
export class AppComponent implements OnInit {
  
  accounts : {name: string, status:string}[] = [];

  constructor(private accountsService: AccountsService){}

  ngOnInit(){
    this.accounts=this.accountsService.accounts;
  }
  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accountsService.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accountsService.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
