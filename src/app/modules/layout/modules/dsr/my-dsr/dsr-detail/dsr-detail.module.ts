import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrDetailRoutingModule } from './dsr-detail-routing.module';
import { DsrDetailComponent } from './dsr-detail.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    DsrDetailComponent
  ],
  imports: [
    CommonModule,
    DsrDetailRoutingModule,
    SharedModule
  ]
})
export class DsrDetailModule { }
