import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-rollback-leave',
  templateUrl: './rollback-leave.component.html',
  styleUrls: ['./rollback-leave.component.scss']
})
export class RollbackLeaveComponent implements OnInit {
rollbackForm!:FormGroup
  constructor(
    private dialogRef: MatDialogRef<RollbackLeaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder:FormBuilder,
    private _formServcie:FormServiceService
  ) { }

  ngOnInit(): void {
    this.makeForm();
  }
  makeForm(){
    this.rollbackForm = this._formBuilder.group({
      reason: this._formServcie.getControl('reason')
    })
  }
  get rollbackFormControl(){
    return this.rollbackForm.controls;
  }
  onConfirmClick() {
    if(this.rollbackForm.valid){
      this.dialogRef.close('true');
    }
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }

}
