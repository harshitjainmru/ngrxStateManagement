import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ShiftComponent } from './shift/shift.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DropDownModule } from 'src/app/modules/shared/drop-down/drop-down.module';
import { UpdateDialogComponent } from './qualification/update-dialog/update-dialog.component';
import { DeleteDialogComponent } from './qualification/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ValidationModule } from 'src/app/pipes/validation/validation.module';
import { TrimDirectiveModule } from 'src/app/directives/trim-directive/trim-directive.module';
import { CommonInputModule } from 'src/app/modules/shared/common-input/common-input.module';
import { CommonDatePickerModule } from 'src/app/modules/shared/common-date-picker/common-date-picker.module';
import { CommonPasswordInputModule } from 'src/app/modules/shared/common-password-input/common-password-input.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonTextAreaModule } from 'src/app/modules/shared/common-text-area/common-text-area.module';
import { DepartmentChangeComponent } from './department-change/department-change.component';
import { StoreModule } from '@ngrx/store';
import { GET_PROFILE_IMAGE } from './profileStore/profile.selector';
import { getPitchIdeaReducer } from './profileStore/profile.reducer';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
    declarations: [
        MyProfileComponent,
        BasicInformationComponent,
        ProfilePictureComponent,
        QualificationComponent,
        ShiftComponent,
        ChangePasswordComponent,
        AppraisalComponent,
        UpdateDialogComponent,
        DeleteDialogComponent,
        DepartmentChangeComponent,
    ],
    imports: [
        CommonModule,
        MyProfileRoutingModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        SharedModule,
        DropDownModule,
        MatDialogModule,
        ValidationModule,
        TrimDirectiveModule,
        CommonInputModule,
        CommonDatePickerModule,
        CommonPasswordInputModule,
        MatIconModule,
        MatCheckboxModule,
        NgxSkeletonLoaderModule,
        CommonTextAreaModule,
        StoreModule.forFeature(GET_PROFILE_IMAGE,getPitchIdeaReducer)
    ]
})
export class MyProfileModule {}
