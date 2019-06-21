import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{servername: string, severContent: string}>();
  @Output() blueprintCreated =  new EventEmitter<{servername: string, severContent: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({servername: this.newServerName, severContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({servername: this.newServerName, severContent: this.newServerContent});
  }
}
