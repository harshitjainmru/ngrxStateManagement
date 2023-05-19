import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './layout-components/header/header.component';
import { SidenavComponent } from './layout-components/sidenav/sidenav.component';
import {MatListModule} from '@angular/material/list';
import { ListItemComponent } from './layout-components/sidenav/list-item/list-item.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { HelpDialogComponent } from 'src/app/components/help-dialog/help-dialog.component';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { LogoutConfirmationComponent } from 'src/app/components/logout-confirmation/logout-confirmation.component';
import { Covid19Component } from 'src/app/components/covid19/covid19.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from '../shared/carousel/carousel.module';
import { TrimDirectiveModule } from 'src/app/directives/trim-directive/trim-directive.module';
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    ListItemComponent,
    FooterComponent,
    HelpDialogComponent,
    LogoutConfirmationComponent,
    Covid19Component

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    AbsoluteRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    TrimDirectiveModule,

  ],
  exports:[
    Covid19Component
  ]
})

export class LayoutModule { }
