import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPitchRoutingModule } from './my-pitch-routing.module';
import { MyPitchComponent } from './my-pitch.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    MyPitchComponent
  ],
  imports: [
    CommonModule,
    MyPitchRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class MyPitchModule { }
