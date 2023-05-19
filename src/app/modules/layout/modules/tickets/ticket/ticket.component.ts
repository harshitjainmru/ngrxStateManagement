import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { TICKET_DATA } from 'src/app/constants/text';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  uiText = TICKET_DATA;
  ticketForm!: FormGroup;
  dataSource = new MatTableDataSource<any>();
  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService,
    private _notificationService:UtilityServiceService,
    private _elementRef:ElementRef
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.dataSource = new MatTableDataSource<any>(this.uiText.table_data);
  }
  createForm() {
    this.ticketForm = this._formBuilder.group({
      subject: this._formService.getControl('approval'),
      department: this._formService.getControl('approval'),
      ticketCategory: this._formService.getControl('approval'),
      priority: this._formService.getControl('approval'),
      editor: this._formService.getControl('editor'),
    });
  }
  get ticketFormControl() {
    return this.ticketForm.controls;
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
  submitHandler() {
    if (this.ticketForm.valid) {
      this.showDiv();
      this._notificationService.showSuccess(MESSAGES.ticketGenerate,'')
    } else {
      this.ticketForm.markAllAsTouched();
    }
  }
}
