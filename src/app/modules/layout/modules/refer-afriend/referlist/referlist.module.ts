import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferlistRoutingModule } from './referlist-routing.module';
import { ReferlistComponent } from './referlist.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ReferlistComponent
  ],
  imports: [
    CommonModule,
    ReferlistRoutingModule,
    MatCardModule,
  ]
})
export class ReferlistModule { }
