import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-common-text-area',
  templateUrl: './common-text-area.component.html',
  styleUrls: ['./common-text-area.component.scss']
})
export class CommonTextAreaComponent implements OnInit {
@Input() labelData;
@Input() labelStyle;
@Input() formcontrolss!:FormControl |AbstractControl;
@Input() cdkAutosizeMinRows;
@Input() cdkAutosizeMaxRows;
@Input() maxLength : number;
@Input() showStar : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }
}
