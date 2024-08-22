import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnChanges {
  @Input() appHighlight!: Date;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appHighlight']) {
      this.applyHighlight();
    }
  }

  private applyHighlight(): void {
    if (this.appHighlight < new Date()) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = ''; 
    }
  }
}
