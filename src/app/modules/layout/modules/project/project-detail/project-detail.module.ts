import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailComponent } from './project-detail.component';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { OverviewComponent } from './overview/overview.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { CommonComponentComponent } from '../common-component/common-component.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NotesComponent } from './notes/notes.component';
import { MatCardModule } from '@angular/material/card';
import { DsrReportComponent } from './dsr-report/dsr-report.component';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddTagDialogComponent } from './add-tag-dialog/add-tag-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ProjectDetailComponent,
    OverviewComponent,
    CommonComponentComponent,
    NotesComponent,
    DsrReportComponent,
    AddTagDialogComponent
  ],
  imports: [
    CommonModule,
    ProjectDetailRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    SharedModule,
    MatExpansionModule,
    MatCardModule,
    DropDownModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule

  ]
})
export class ProjectDetailModule { }
