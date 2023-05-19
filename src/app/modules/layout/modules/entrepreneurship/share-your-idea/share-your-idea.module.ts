import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareYourIdeaRoutingModule } from './share-your-idea-routing.module';
import { ShareYourIdeaComponent } from './share-your-idea.component';


@NgModule({
  declarations: [
    ShareYourIdeaComponent
  ],
  imports: [
    CommonModule,
    ShareYourIdeaRoutingModule
  ]
})
export class ShareYourIdeaModule { }
