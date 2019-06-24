import { ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Directive, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'red';
  @Input() hightlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string ;
  constructor(private elRef: ElementRef,  private renderer: Renderer2) {
    
   }
  
   ngOnInit(){
     //this.renderer.setStyle(this.elRef.nativeElement, 'background-color' ,'blue')
     this.backgroundColor=this.defaultColor;
   }
   @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color' ,'blue');
    this.backgroundColor = this.hightlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color' ,'transparent')
   this.backgroundColor = this.defaultColor;
  }
}
