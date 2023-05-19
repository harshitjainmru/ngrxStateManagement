import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';

@Directive({
  selector: '[appTrimDirective]'
})
export class TrimDirectiveDirective {

  get ctrl() {
    return this.ngControl.control;
  }

  constructor(private ngControl: NgControl, private el: ElementRef) {}

  @HostListener("focus")
  @HostListener("blur")
  onBlur() {
    if (
      this.el.nativeElement.value === null ||
      this.el.nativeElement.value === undefined ||
      this.el.nativeElement.value === ""
    ) {
      return;
    }
    this.el.nativeElement.value = this.el.nativeElement.value.trim();
    this.ctrl.setValue(this.ctrl.value.trim());
  }

}
