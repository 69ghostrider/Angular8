import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit ,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit{
  @Input('srvElement') element: {type: string, name: string, content: string};  // renaming a element to use outside the component
  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;
  constructor() {
    console.log("Contructor called")
   }
  
  ngOnChanges(changes: SimpleChanges){
  console.log(changes)
  }
  ngDoCheck(){
    console.log("in do check")
  }
  ngOnInit() {
    console.log("Text content in INIT"+this.paragraph.nativeElement.textContent)
    console.log("ngOnInit called")
  }
  ngAfterContentInit(){
    
    console.log("After content init")
  }
  ngAfterContentChecked(){
    console.log("After content checked")
  }
  ngAfterViewChecked(){
    console.log("After view checked")
  }
  ngAfterViewInit(){
    console.log("After view init"+this.paragraph.nativeElement.textContent)
  }
}
