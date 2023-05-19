import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputMinMaxValue]',
})
export class InputMinMaxValueDirective {
  @Input() min;
  @Input() max;
  constructor(private ef: ElementRef) {}
  @HostListener('input', ['$event']) on_Input(e: InputEvent) {

    let val = parseInt(this.ef.nativeElement.value);

    if (this.max !== null && this.max !== undefined && val >= this.max)
      this.ef.nativeElement.value = this.max.toString();
    else if (this.min !== null && this.min !== undefined && val <= this.min)
      this.ef.nativeElement.value = this.min.toString();
  }
}
