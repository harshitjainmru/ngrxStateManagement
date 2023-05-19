import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { EXPOLRE_VALUE, INDUSTRY_DATA, TYPE_DATA } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
import { FormServiceService } from 'src/app/services/common/form-service.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';
import { getPitchIdeaAction } from '../store/pitch.action';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
uiText=EXPOLRE_VALUE
industryDropdownValue = INDUSTRY_DATA
typeDropdownValue = TYPE_DATA
ideaForm!:FormGroup
@ViewChild(FormGroupDirective) formgroupdirective!:FormGroupDirective
  constructor(private _title:Title, private _formBuilder:FormBuilder,private _formService:FormServiceService,private _notificationService:UtilityServiceService,private _store:Store) { }

  ngOnInit(): void {
    this._title.setTitle(TITLE.explore_title)
    this.createForm();
    this.setValue();
    this.setValueDisabled();

  }
  createForm(){
    this.ideaForm = this._formBuilder.group({
      name:this._formService.getControl('name'),
      emp_id:this._formService.getControl('emp_id'),
      dob:this._formService.getControl('dob'),
      pitch_title:this._formService.getControl('pitch_title'),
      industry:this._formService.getControl('industry',true,this.industryDropdownValue[0]),
      pitch_type:this._formService.getControl('pitch_type',true,this.typeDropdownValue[0]),
      editor:this._formService.getControl('editor'),
      presentation:this._formService.getControl('presentation'),
    })

  }
  get ideaFormControl(){
    return this.ideaForm.controls
  }
  setValue() {
    this.ideaForm
      .get('name')
      .setValue('Harshit Kumar Jain');
    this.ideaForm.get('emp_id').setValue('AI1611');
    this.ideaForm.get('dob')?.setValue('2000-04-07');
  }
  setValueDisabled() {
    this.ideaForm.get('name').disable();
    this.ideaForm.get('emp_id').disable();
    this.ideaForm.get('dob').disable();
  }
  submitHandler(){
    // console.log(this.ideaForm,'invalid');
    if(this.ideaForm.valid){
       if(this.ideaFormControl['industry'].value=='Select Industry'){
         this._notificationService.showError(MESSAGES.selectIndustry,'')
       }
       console.log(this.ideaForm,'valid');
       this._notificationService.showSuccess(MESSAGES.addPitch,'')
      //  debugger
      //  this.formgroupdirective.resetForm();
      this._store.dispatch(getPitchIdeaAction(this.ideaForm.value))
      this.createForm();
      this.setValue();
      this.setValueDisabled();
    }else{
      // this.ideaForm.markAllAsTouched();
    }
  }


}
