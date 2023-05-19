import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyDocRoutingModule } from './policy-doc-routing.module';
import { PolicyDocComponent } from './policy-doc.component';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    PolicyDocComponent
  ],
  imports: [
    CommonModule,
    PolicyDocRoutingModule,
    MatTableModule,
    MatCardModule,
    SharedModule
  ]
})
export class PolicyDocModule { }
