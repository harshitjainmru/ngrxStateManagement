import { Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { slideInRight } from 'src/animations/slideInRight';
import { validationMessage } from 'src/app/constants/error-messages';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { QUALIFICATION_HEADING } from 'src/app/constants/tables';
import {
  BASIC_INFORMATION,
  EDUCATION_DROPDOWN,
  FORM_LABEL,
  LANGUAGE_DROPDOWN,
} from 'src/app/constants/text';
import { QUALIFICATIONTABLE } from 'src/app/models/table-interface';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  animations: [slideInRight],
})
export class QualificationComponent implements OnInit {
  uiMessage = BASIC_INFORMATION;
  labelMessage = FORM_LABEL;
  educationDropdown = EDUCATION_DROPDOWN;
  languageDropdown = LANGUAGE_DROPDOWN;
  heading = QUALIFICATION_HEADING;
  qualificationForm!: FormGroup;
  Table_DATA = [];
  dataSource = new MatTableDataSource<QUALIFICATIONTABLE>();
  errorMessage: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService,
    private dialog: MatDialog,
    private _notificationService:UtilityServiceService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<QUALIFICATIONTABLE>(
      this.Table_DATA
    );
    this.errorMessage = validationMessage;
    this.createForm();
  }
  get qualificationFormControl() {
    return this.qualificationForm.controls;
  }

  createForm() {
    this.qualificationForm = this._formBuilder.group({
      school: this._formService.getControl('school'),
      educationLevel: this._formService.getControl(
        'educationLevel',
        true,
        this.educationDropdown[0]
      ),
      fromTime: this._formService.getControl('fromTime'),
      toTime: this._formService.getControl('toTime'),
      language: this._formService.getControl(
        'language',
        true,
        this.languageDropdown[0]
      ),
      professionalCourses: this._formService.getControl('professionalCourses'),
      description: this._formService.getControl('description'),
    });
    console.log(this.qualificationForm);
  }
  getDatevalue() {
    return (
      this.qualificationFormControl['fromTime'].value
        .toDateString()
        .substr(4, 12)
        .replace(/\s/g, '-') +
      ' - ' +
      this.qualificationFormControl['toTime'].value
        .toDateString()
        .substr(4, 12)
        .replace(/\s/g, '-')
    );
  }

  updateButton(item) {
    console.log(item, 'item');

    const dialogRef = this.dialog
      .open(UpdateDialogComponent, {
        disableClose: true,
        data: item,
      })
      .afterClosed()
      .subscribe((res: any) => {
        console.log(res, 'resresrers');
        if (res) {
          this.Table_DATA.forEach((value) => {
            console.log(value, 'value');

            if (value.id == item.id) {
              value.school = res.school;
              value.fromTimetotoTime =
                res.fromTime.toDateString().substr(4, 12).replace(/\s/g, '-') +
                ' - ' +
                res.toTime.toDateString().substr(4, 12).replace(/\s/g, '-');
              value.educationLevel = res.educationLevel;
            }
            dialogRef.unsubscribe();
          });
        }
      });
  }
  deleteButton(item) {
    const dialogRef = this.dialog
      .open(DeleteDialogComponent, {
        disableClose: true,
        data: { data: item, form: this.qualificationForm },
      })
      .afterClosed()
      .subscribe((res: boolean) => {
        if (res) {
          this.Table_DATA = this.Table_DATA.filter(
            (tableItem) => item.id != tableItem.id
          );
          this.dataSource = new MatTableDataSource<QUALIFICATIONTABLE>(
            this.Table_DATA
          );
          this._notificationService.showSuccess(MESSAGES.qualification_info_delete,'')
        }
        dialogRef.unsubscribe();
      });
  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }

  submitHandler() {
    if(this.qualificationFormControl['fromTime'].value > this.qualificationFormControl['toTime'].value){
      this._notificationService.showError(MESSAGES.fromTimeGreaterValue,'')
    }
    else if (this.qualificationForm.valid) {
      this._notificationService.showSuccess(MESSAGES.qualification_info,'')
      this.Table_DATA.push({
        school: this.qualificationFormControl['school'].value,
        fromTimetotoTime: this.getDatevalue(),
        educationLevel: this.qualificationFormControl['educationLevel'].value,
        id: Date.now(),
        language: this.qualificationFormControl['language'].value,
        professionalCourses:
          this.qualificationFormControl['professionalCourses'].value,
        description: this.qualificationFormControl['description'].value,
        fromTime: this.qualificationFormControl['fromTime'].value,
        toTime: this.qualificationFormControl['toTime'].value,
      });
      this.dataSource = new MatTableDataSource<QUALIFICATIONTABLE>(
        this.Table_DATA
      );
      this.resetForm();
      this.createForm();
    } else {
      this.qualificationForm.markAllAsTouched();
    }
  }
  resetForm() {
    this.qualificationForm.reset();
  }
}
