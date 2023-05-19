import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { validationMessage } from 'src/app/constants/error-messages';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { ASSET_REQUEST_HEADING } from 'src/app/constants/tables';
import { REQUEST_ASSETS_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-request-assets',
  templateUrl: './request-assets.component.html',
  styleUrls: ['./request-assets.component.scss'],
})
export class RequestAssetsComponent implements OnInit {
  yesterday = new Date();
  uiText = REQUEST_ASSETS_DATA;
  heading = ASSET_REQUEST_HEADING;
  table_data = [];
  dataSource = new MatTableDataSource<any>();
  assetRequestForm!: FormGroup;
  errorMessage;
  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService,
    private _notificationService:UtilityServiceService,
    private _elementRef:ElementRef
  ) {
    this.yesterday.setDate(this.yesterday.getDate() - 0);
  }

  ngOnInit(): void {
    this.createForm();
    this.dataSource = new MatTableDataSource<any>(this.table_data);
    this.errorMessage = validationMessage;
  }
  showForm() {
    let content = this._elementRef.nativeElement.querySelector('.newRequest')
    console.log(content);
    if(content.style.maxHeight){
      content.style.maxHeight = null
    }else{
      content.style.maxHeight = 2 * content.scrollHeight + 'px'
    }
  }

  createForm() {
    this.assetRequestForm = this._formBuilder.group({
      category: this._formService.getControl('category'),
      quantity: this._formService.getControl('quantity'),
      priority: this._formService.getControl('priority'),
      date: this._formService.getControl('date'),
      type: this._formService.getControl('type'),
      reason: this._formService.getControl('reason'),
    });
  }
  get assetRequestFormControl() {
    return this.assetRequestForm.controls;
  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }
  submit(){
    if(this.assetRequestForm.valid){
      this.showForm();
      this._notificationService.showSuccess(MESSAGES.requestAsset,'')

    }
  }
}
