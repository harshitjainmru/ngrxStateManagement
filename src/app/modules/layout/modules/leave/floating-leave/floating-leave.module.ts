import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingLeaveRoutingModule } from './floating-leave-routing.module';
import { FloatingLeaveComponent } from './floating-leave.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    FloatingLeaveComponent
  ],
  imports: [
    CommonModule,
    FloatingLeaveRoutingModule,
    SharedModule,
  ]
})
export class FloatingLeaveModule { }
