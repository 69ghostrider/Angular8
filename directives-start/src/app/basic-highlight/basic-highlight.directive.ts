import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighLight]'
})
export class BasicHighlightDirective implements OnInit{
constructor(private elementref: ElementRef){

}

ngOnInit(){
    this.elementref.nativeElement.style.backgroundColor='green';
}
}