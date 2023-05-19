import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrRoutingModule } from './dsr-routing.module';
import { DsrComponent } from './dsr.component';
import { StoreModule } from '@ngrx/store';
import { GET_DSR_DATA} from './store/dsr.selector';
import { getDsrReducer } from './store/dsr.reducer';


@NgModule({
  declarations: [
    DsrComponent
  ],
  imports: [
    CommonModule,
    DsrRoutingModule,
    StoreModule.forFeature(GET_DSR_DATA,getDsrReducer)
  ]
})
export class DsrModule { }
