import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MANUAL_PUNCH_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-manual-punch',
  templateUrl: './manual-punch.component.html',
  styleUrls: ['./manual-punch.component.scss']
})
export class ManualPunchComponent implements OnInit {
uiText = MANUAL_PUNCH_DATA
Table_DATA=[]
dataSource = new MatTableDataSource();
manualPunchForm!:FormGroup
  constructor(private _formbuilder:FormBuilder,private _formServcie:FormServiceService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.Table_DATA);
    this.createForm();
    this.setDefaultEmployeeValue()
  }
  createForm(){
    this.manualPunchForm = this._formbuilder.group({
      date:this._formServcie.getControl('date',true,this.dateFormat()),
      company:this._formServcie.getControl('company',true,this.uiText.company_data[0]),
      employee:this._formServcie.getControl('employee')
    })
  }
  get manualPunchFormControl(){
    return this.manualPunchForm.controls;
  }
  dateFormat() {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(
     new Date(),
      'yyyy-MM-dd'
    );
    return formattedDate;
  }
  setDefaultEmployeeValue(){
    this.manualPunchFormControl['employee'].setValue('Harshit Kumar Jain')
    this.manualPunchFormControl['employee'].disable();
  }
}
