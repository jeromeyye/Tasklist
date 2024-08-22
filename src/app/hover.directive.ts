import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class HoverDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.boxShadow = '0 10px 10px grey';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.boxShadow = 'none';
  }
}
