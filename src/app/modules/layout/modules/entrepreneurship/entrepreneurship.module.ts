import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepreneurshipRoutingModule } from './entrepreneurship-routing.module';
import { EntrepreneurshipComponent } from './entrepreneurship.component';
import { TrimDirectiveModule } from 'src/app/directives/trim-directive/trim-directive.module';
import { StoreModule } from '@ngrx/store';
import { GET_PITCH_IDEA } from './store/pitch.selector';
import { getPitchIdeaReducer } from './store/pitch.reducer';


@NgModule({
  declarations: [
    EntrepreneurshipComponent
  ],
  imports: [
    CommonModule,
    EntrepreneurshipRoutingModule,
    TrimDirectiveModule,
    StoreModule.forFeature(GET_PITCH_IDEA,getPitchIdeaReducer)
  ]
})
export class EntrepreneurshipModule { }
