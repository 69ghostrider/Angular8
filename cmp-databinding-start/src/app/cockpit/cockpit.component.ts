import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('srCreated') serverCreated = new EventEmitter<{servername: string, severContent: string}>();
  @Output('bpCreated') blueprintCreated =  new EventEmitter<{servername: string, severContent: string}>();
  @ViewChild('serverContentInput',{static: false}) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput) {
    console.log(this.serverContentInput)
    this.serverCreated.emit({servername: serverNameInput.value, severContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput,serverContentInput) {
    this.blueprintCreated.emit({servername: serverNameInput.value, severContent: this.serverContentInput.nativeElement.value});
  }
}
