import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cardHover]'
})
export class CardHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover', ['$event']) 
  public mouseoverOnCard(event: MouseEvent): void {
    this.renderer.addClass(this.element.nativeElement, 'mat-elevation-z12')
  }

  @HostListener('mouseout', ['$event'])
  public mouseoutOnCard(event: MouseEvent): void {
    this.renderer.removeClass(this.element.nativeElement, 'mat-elevation-z12')
  }

}
