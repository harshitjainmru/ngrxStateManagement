import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DSR_REPORT_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-dsr-report',
  templateUrl: './dsr-report.component.html',
  styleUrls: ['./dsr-report.component.scss'],
})
export class DsrReportComponent implements OnInit {
  uiText = DSR_REPORT_DATA;
  dataSource = new MatTableDataSource<any>();
  dsrReportForm!: FormGroup;
  maxDate = new Date();

  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.uiText.table_data);
    this.makeForm();
  }
  makeForm() {
    this.dsrReportForm = this._formBuilder.group({
      dateFrom: this._formService.getControl('fromTime'),
      dateTo: this._formService.getControl('toTime'),
      department: this._formService.getControl('departmentname'),
      resource: this._formService.getControl('approval'),
      submission: this._formService.getControl('approval'),
      pmApproval: this._formService.getControl('approval'),
      amApproval: this._formService.getControl('approval'),
      rmApproval: this._formService.getControl('approval'),
      finalApproval: this._formService.getControl('approval'),
      hours: this._formService.getControl('approval'),
    });
  }
  get dsrReportFormControl(){
   return this.dsrReportForm.controls;
  }
}
