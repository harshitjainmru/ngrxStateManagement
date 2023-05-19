import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonTableComponent } from 'src/app/components/common-table/common-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReferACandidateComponent } from '../layout/modules/home/latest-job-opening/dialogReferACandidate/refer-acandidate/refer-acandidate.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorStyleDirectivesDirective } from 'src/app/directives/paginator-style-directives.directive';
import { MatButtonModule } from '@angular/material/button';
import { ValidationModule } from 'src/app/pipes/validation/validation.module';
import { DropDownModule } from './drop-down/drop-down.module';
import { CommonFileUploadModule } from './common-file-upload/common-file-upload.module';
import { CommonInputModule } from './common-input/common-input.module';
import { CommonTextAreaModule } from './common-text-area/common-text-area.module';
@NgModule({
  declarations: [
    CommonTableComponent,
    ReferACandidateComponent,
    PaginatorStyleDirectivesDirective

  ],
  imports: [CommonModule,
     MatIconModule,
     MatSnackBarModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatDialogModule,
     MatFormFieldModule,
     MatInputModule,
     MatSelectModule,
     FormsModule,
     ReactiveFormsModule,
     MatButtonModule,
     ValidationModule,
     DropDownModule,
     CommonFileUploadModule,
    CommonInputModule,
    CommonTextAreaModule



    ],
    exports: [CommonTableComponent,
      ReferACandidateComponent

    ]
})
export class SharedModule {}
