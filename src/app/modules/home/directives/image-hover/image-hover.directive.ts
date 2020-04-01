import { Directive, HostBinding, HostListener, Renderer2, ElementRef, Input } from '@angular/core'

@Directive({
  selector: '[imageHover]'
})
export class ImageHoverDirective {

  @Input() public cardId: number

  @Input('cardImgUrl') 
  public set cardImage(value: string) {
    this.renderer.setStyle(this.element.nativeElement, 'background-image', `url(${value})`)
    this.renderer.addClass(this.element.nativeElement, 'card-image')
  }

  constructor(private renderer: Renderer2, private element: ElementRef) { }


  @HostListener('mouseover', ['$event'])
  public onMouseover(event: MouseEvent): void {
    // this.renderer.addClass(this.element, '')
    console.log(this.cardId)
  }

  @HostListener('mouseout', ['$event'])
  public onMouseout(event: MouseEvent): void {
    console.log("Mouse left card", this.cardId)
  }


}
