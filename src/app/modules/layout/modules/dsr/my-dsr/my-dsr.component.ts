import { DatePipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { DSR_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';
import { getAddDsrDataAction } from '../store/dsr.action';
import { GET_DSR_DATA_SELECTOR } from '../store/dsr.selector';

@Component({
  selector: 'app-my-dsr',
  templateUrl: './my-dsr.component.html',
  styleUrls: ['./my-dsr.component.scss'],
})
export class MyDsrComponent implements OnInit {
  uiText = DSR_DATA;
  dsrForm!: FormGroup;
  filterForm!: FormGroup;
  dataSource = new MatTableDataSource<any>();
  maxDate = new Date();
  filteredData: any[];
  table_data:any[]=[]
  filterSelect: string;
  @Output() buttonToggle: EventEmitter<any> = new EventEmitter();
  date: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService,
    private _notificationService: UtilityServiceService,
    private _elementRef:ElementRef,
    private _store:Store<{Data:any}>
  ) {}

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<any>(this.uiText.table_data);
    this.createForm();
    this.makeForm();
    this.table_data = []
    this._store.select(GET_DSR_DATA_SELECTOR).subscribe((data:any)=>{
      this.table_data = data
      this.dataSource = new MatTableDataSource<any>(this.table_data);
      console.log(data,'dsr');

    })
    // const serialNumber = this.uiText.table_data.length + 1;
    // const currentDate = new Date();
    // const cutoffDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // add 1 day to current date
    // if (currentDate.getTime() > cutoffDate.getTime()) {
    //   const newData = {
    //     id: Date.now(),
    //     empname: 'Harshit Kumar Jain',
    //     empid: 'AI1611',
    //     email: 'harshit.jain@appinventiv.com',
    //     type: 'Permanent',
    //     sno: serialNumber,
    //     date: 'april',
    //     logged: '00:00',
    //   };
    //   this.dataSource.data.push(newData);
    // }
  }
  createForm() {
    this.dsrForm = this._formBuilder.group({
      projectname: this._formService.getControl('approval'),
      date: this._formService.getControl('toTime'),
      hours: this._formService.getControl('approval'),
      nowork: '',
      dsr: this._formService.getControl('editor'),
    });
  }
  get dsrFormControl() {
    return this.dsrForm.controls;
  }
  makeForm() {
    this.filterForm = this._formBuilder.group({
      fromDate: this._formService.getControl('fromTime'),
      endDate: this._formService.getControl('toTime'),
      submissionStatus: this._formService.getControl('approval',true,this.uiText.status_data[0]),
      project: this._formService.getControl('approval',true,this.uiText.filter_project_data[0]),
      approvalStatus: this._formService.getControl('approval',true,this.uiText.approval_status_data[0]),
      hours: this._formService.getControl('approval',true,this.uiText.hours_data[0]),
    });
  }

  get filterFormControl() {
    return this.filterForm.controls;
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
  dateFormat() {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(
      this.dsrFormControl['date'].value
        .toDateString()
        .substr(4, 12)
        .replace(/\s/g, '-'),
      'dd-MMM-yyyy'
    );
    return formattedDate;
  }
  select(item) {
    if (item.checked) {
      this.dsrFormControl['dsr'].setValue(this.uiText.noWork_Editor_value);
      this.dsrFormControl['hours'].setValue('00:00');
      this.dsrFormControl['dsr'].updateValueAndValidity();
    } else {
      this.dsrForm.reset();
    }
  }

  filterData() {
    const startInput = document.getElementById('from_date') as HTMLInputElement;
    const endInput = document.getElementById('end_date') as HTMLInputElement;
    const start = new Date(startInput.value);
    const end = new Date(endInput.value);
    this.dataSource.data = this.uiText.table_data.filter((item) => {
      const date = new Date(item.date);
      return date >= start && date <= end;
    });
  }
  dataCheck(data){
    console.log(data);
    this.filterSelect = data
    this.applyFilter()
  }
  applyFilter() {
    console.log(this.filterSelect);
    this.dataSource.filterPredicate = (data) => {
      console.log(data,'data');
      return this.filterPredicate(data, this.filterSelect);
    };
    this.dataSource.filter = this.filterSelect;
  }

  filterPredicate(data,filterSelect?) {
    let hours = +data.hours.split(':')[0];
    let minutes = +data.hours.split(':')[1];

    switch (this.filterSelect) {
      case 'Less than 5 Hours':
        return hours < 5;
      case 'Greater than 5 and Less than equal to 8':
        return hours > 5 && (hours < 8 || (hours === 8 && minutes === 0));
      case 'Greater than 8':
        return hours > 8 || (hours === 8 && minutes > 0);
      case 'Greater than 10':
        return hours > 10 || (hours === 10 && minutes > 0);
      default:
        return true;
    }
  }
  filterSubmit(){
    if(this.filterForm.valid){
      this.resetForm();
      this.applyFilter();
      this.filterData();
    }else{
      this._notificationService.showError(MESSAGES.dsrFilter,'')
    }
  }
  resetForm(){
    this.filterForm.reset();
    this.makeForm();
    this.dataSource = new MatTableDataSource<any>(this.dataSource.data);

  }

  submitHandler() {
    if (this.dsrForm.valid) {
      this.showDiv()
      this._notificationService.showSuccess(MESSAGES.dsrSubmit, '');
      console.log(this.dateFormat(), 'tabledate');

      const serialNumber = this.table_data.length + 1;
      this.dsrForm.value["empname"] = 'Harshit Kumar Jain',
      this.dsrForm.value["empid"] = 'AI1611',
      this.dsrForm.value["email"] = 'harshit.jain@appinventiv.com',
      this.dsrForm.value["emptype"] = 'Permanent',
      this.dsrForm.value["date"] = this.dateFormat(),
      this.dsrForm.value["hours"] = this.dsrFormControl['hours'].value,
      this.dsrForm.value["sno"] = serialNumber,
      this.dsrForm.value["id"] = this.table_data.length+1,
      this.dsrForm.value["status"] = 'Submitted',
      this.dsrForm.value["pm_approval"] = 'N/A',
      this.dsrForm.value["am_approval"] = 'N/A',
      this.dsrForm.value["rm_approval"] = 'N/A',
      this.dsrForm.value["final_approve"] = 'Pending',
      this._store.dispatch(getAddDsrDataAction(this.dsrForm.value))
      this.dataSource = new MatTableDataSource<any>(this.table_data);
      console.log(this.dsrForm.value);

      this.dsrForm.reset();
    } else {
      this.dsrForm.markAllAsTouched();
    }
  }
}
