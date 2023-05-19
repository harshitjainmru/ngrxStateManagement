import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsInventoryRoutingModule } from './assets-inventory-routing.module';
import { AssetsInventoryComponent } from './assets-inventory.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  declarations: [
    AssetsInventoryComponent
  ],
  imports: [
    CommonModule,
    AssetsInventoryRoutingModule,
    SharedModule
  ]
})
export class AssetsInventoryModule { }
