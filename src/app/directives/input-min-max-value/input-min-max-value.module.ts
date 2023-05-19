import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMinMaxValueDirective } from './input-min-max-value.directive';



@NgModule({
  declarations: [
    InputMinMaxValueDirective
  ],
  imports: [
    CommonModule
  ],
    exports:[
    InputMinMaxValueDirective

    ]
})
export class InputMinMaxValueModule { }
