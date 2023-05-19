import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import {
  MY_LEAVE_HEADING,
  MY_LEAVE__TABLE_DATA,
} from 'src/app/constants/tables';
import { MY_LEAVE_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';
import { RollbackLeaveComponent } from './rollback-leave/rollback-leave.component';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss'],
})
export class MyLeaveComponent implements OnInit {
  uiText = MY_LEAVE_DATA;
  heading = MY_LEAVE_HEADING;
  table_data = MY_LEAVE__TABLE_DATA;
  dataSource = new MatTableDataSource<any>();
  myLeaveForm!: FormGroup;
  shortLeaveTime: boolean = false;
  editorValue: string = '';
  showEndTimeShortLeave: any = [];
  minDate
  constructor(
    private _formbuilder: FormBuilder,
    private _formService: FormServiceService,
    private _notificationServcie: UtilityServiceService,
    private dialog: MatDialog,
    private _elementRef:ElementRef
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(new Date().getTime() - (4 * 24 * 60 * 60 * 1000));
  }

  ngOnInit(): void {
    this.createForm();
    this.dataSource = new MatTableDataSource<any>(this.table_data);

  }
  showDiv() {
    let content = this._elementRef.nativeElement.querySelector('.content')
    console.log(content);
    if(content.style.maxHeight){
      content.style.maxHeight = null
    }else{
      content.style.maxHeight = 2 * content.scrollHeight + 'px'
    }
  }

  createForm() {
    this.myLeaveForm = this._formbuilder.group({
      typeData: this._formService.getControl('approval'),
      halfDay: [],
      halfTime: [],
      shortLeaveStartTime: [this.uiText.start_time_data[0].value],
      shortLeaveEndTime: [this.uiText.end_time_data[0].value],
      startDate: this._formService.getControl('fromTime'),
      endDate: this._formService.getControl('toTime'),
      remarks: this._formService.getControl('missingDescription'),
      upload: this._formService.getControl('upload_document'),
      editor: this._formService.getControl('editor'),
    });
  }
  get myLeaveFormControl() {
    return this.myLeaveForm.controls;
  }
  checkFirstDropdown($event) {
    this.showEndTimeShortLeave = this.uiText.end_time_data.filter(
      (c) => c.id === $event.value.id
    );
    let item = this.showEndTimeShortLeave[0];
    this.myLeaveForm.controls['shortLeaveEndTime'].setValue(item.value);
  }
  closeDiv() {
    this.showDiv();
    this.myLeaveForm.reset();
  }

  openRollBack(data) {
    const dialogRef = this.dialog.open(RollbackLeaveComponent,{
      panelClass:'rollback',
      disableClose:true
    })
    dialogRef.afterClosed().subscribe((res) => {
      if (res == 'true') {
        const index = this.table_data.findIndex(item => item.id === data.id);
        if (index > -1) {
          this.table_data.splice(index, 1);
          this.dataSource = new MatTableDataSource<any>(
            this.table_data
          );
          this._notificationServcie.showSuccess(MESSAGES.leaveRevoke,'')
        }
      }
    });
  }
  submit() {
    // if(this.myLeaveForm.controls.typeData.value == 'Short Leaves'){
    //   this.myLeaveFormControl['shortLeaveStartTime'].setValidators([Validators.required])
    //   this.myLeaveFormControl['shortLeaveStartTime'].updateValueAndValidity();
    // }else{
    //   this.myLeaveFormControl['shortLeaveStartTime'].clearValidators()
    //   this.myLeaveFormControl['shortLeaveStartTime'].updateValueAndValidity();
    // }
    if(this.myLeaveFormControl['startDate'].value > this.myLeaveFormControl['endDate'].value){
      this._notificationServcie.showError(MESSAGES.fromTimeGreaterValue,'')
    }
    if (this.myLeaveForm.valid) {
      console.log(this.myLeaveForm.controls['editor'].value);
      console.log(
        this.myLeaveForm.controls['editor'].value.replace(
          /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,
          ''
        )
      );
      this._notificationServcie.showSuccess(MESSAGES.leave_added, '');

      this.table_data.push({
        id: Date.now(),
        type: this.myLeaveFormControl['typeData'].value,
        requestfrom: this.myLeaveFormControl['startDate'].value
          .toDateString()
          .substr(4, 12)
          .replace(/\s/g, '-'),
        requestto: this.myLeaveFormControl['endDate'].value
          .toDateString()
          .substr(4, 12)
          .replace(/\s/g, '-'),
        applied: new Date().toDateString().substr(4, 12).replace(/\s/g, '-'),
        status: 'Pending',
        level1: 'Suyash Saxena (AI057)',
        level2: 'HR (Human Resourse)',
      });

      this.dataSource = new MatTableDataSource<any>(
        this.table_data
      );
      this.myLeaveForm.reset();
      this.showDiv();
    } else {
      this.myLeaveForm.markAllAsTouched();
    }
  }

}
