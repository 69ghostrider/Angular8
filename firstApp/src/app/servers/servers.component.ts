import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test server';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created and name is ' + this.serverName;
  }
  onUpdateServerName(event: any){
    this.serverName  = event.target.value;
    console.log(event.target.value);
  }
}
