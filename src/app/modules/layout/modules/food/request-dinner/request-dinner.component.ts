import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SlideInOutAnimation } from 'src/animations/showDiv';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { REQUEST_DINNER_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-request-dinner',
  templateUrl: './request-dinner.component.html',
  styleUrls: ['./request-dinner.component.scss'],
  animations: [SlideInOutAnimation],
})
export class RequestDinnerComponent implements OnInit {
  uiText = REQUEST_DINNER_DATA;
  requestDinnerForm!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService,
    private _notificationService: UtilityServiceService,
    private _elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.makeForm();
    this.requestDinnerFormControl['date'].disable();
    const myButton = document.getElementById("dinnerBtn") as HTMLButtonElement;
    var date = new Date();
    if (date.getHours() >= 18) {
      myButton.disabled = true;
    }
  }
  showDiv() {
    let content = this._elementRef.nativeElement.querySelector('.form');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 2 * content.scrollHeight + 'px';
    }
  }
  makeForm() {
    this.requestDinnerForm = this._formBuilder.group({
      date: [this.dateFormat()],
      project: this._formService.getControl(
        'educationLevel',
        true,
        this.uiText.project_data[0]
      ),
      editor: this._formService.getControl('editor',true),
    });
  }
  dateFormat() {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(new Date(), 'yyyy-MM-dd');
    return formattedDate;
  }
  get requestDinnerFormControl() {
    return this.requestDinnerForm.controls;
  }
  submitHandler() {
    if (this.requestDinnerForm.valid) {
      this.showDiv();
      this._notificationService.showSuccess(MESSAGES.requestDinner, '');
    } else {
      if(this.requestDinnerFormControl['project'].value == 'Select Project'){
      this._notificationService.showError(MESSAGES.errorRequestProject, '');
      }else if (this.requestDinnerFormControl['editor'].value == ''){
        this._notificationService.showError(MESSAGES.reasonLateNightDinner, '');
      }
    }
  }
}
