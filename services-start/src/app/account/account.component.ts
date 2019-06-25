import { AccountsService } from './../accounts.service';
import { LoggingService } from './../logging.service';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]  //no adding AccountsService as it it declared in parent and will be overitten 
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){}

  onSetTo(status: string) {
    this.loggingService.logStatusChange(status)   //injecting a logging service
    this.accountsService.updateStatus(this.id,status);
  }
 
}
