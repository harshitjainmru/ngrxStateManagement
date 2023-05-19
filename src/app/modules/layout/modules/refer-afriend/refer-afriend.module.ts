import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferAFriendRoutingModule } from './refer-afriend-routing.module';
import { ReferAFriendComponent } from './refer-afriend.component';


@NgModule({
  declarations: [
    ReferAFriendComponent
  ],
  imports: [
    CommonModule,
    ReferAFriendRoutingModule
  ]
})
export class ReferAFriendModule { }
