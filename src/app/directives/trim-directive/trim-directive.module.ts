import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimDirectiveDirective } from './trim-directive.directive';



@NgModule({
  declarations: [
    TrimDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TrimDirectiveDirective
  ]
})
export class TrimDirectiveModule { }
