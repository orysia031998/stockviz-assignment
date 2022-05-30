import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {
  @Output()
  public clickOutside = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(element);
    if (!clickedInside) {
      this.clickOutside.emit({ clickOutside: true });
    }
  }
}
