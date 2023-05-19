import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPerformanceRoutingModule } from './my-performance-routing.module';
import { MyPerformanceComponent } from './my-performance.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DivisionRatingComponent } from '../division-rating/division-rating.component';
import { BreadcrumbModule } from 'src/app/modules/shared/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [
    MyPerformanceComponent,
    DivisionRatingComponent

  ],
  imports: [
    CommonModule,
    MyPerformanceRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DropDownModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule
  ]
})
export class MyPerformanceModule { }
