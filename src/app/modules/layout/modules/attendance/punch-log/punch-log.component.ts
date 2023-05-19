import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PUNCH_LOG_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-punch-log',
  templateUrl: './punch-log.component.html',
  styleUrls: ['./punch-log.component.scss']
})
export class PunchLogComponent implements OnInit {
uiText = PUNCH_LOG_DATA
Table_DATA=[]
dataSource = new MatTableDataSource();
PunchForm!:FormGroup
  constructor(private _formBuilder:FormBuilder, private _formService:FormServiceService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.Table_DATA);
    this.createForm();
  }
  createForm(){
    this.PunchForm = this._formBuilder.group({
      date:this._formService.getControl('date'),
      company:this._formService.getControl('company'),
    })
  }
  get PunchFormControl(){
    return this.PunchForm.controls
  }

}
