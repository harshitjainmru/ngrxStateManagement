import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTrainingRoutingModule } from './my-training-routing.module';
import { MyTrainingComponent } from './my-training.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationModule } from "../../../../../pipes/validation/validation.module";

@NgModule({
    declarations: [
        MyTrainingComponent,
        FeedbackFormComponent
    ],
    imports: [
        CommonModule,
        MyTrainingRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatRadioModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        ValidationModule
    ]
})
export class MyTrainingModule { }
