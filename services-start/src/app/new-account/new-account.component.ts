import { AccountsService } from './../accounts.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from './../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]    //injecting a service  //no adding AccountsService as it it declared in parent and will be overitten
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountService: AccountsService){}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    this.loggingService.logStatusChange(accountStatus)   //creating a logger
  }
}
