import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  @Output()
  clickOutside: EventEmitter<any> = new EventEmitter();

  constructor(private _elementRef: ElementRef) { }



  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(null);
      console.log('clicked outside, hooray!!!');
    } else {
      console.log('clicked inside');
    }
  }

}
