import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-date-picker',
  templateUrl: './common-date-picker.component.html',
  styleUrls: ['./common-date-picker.component.scss']
})
export class CommonDatePickerComponent implements OnInit {
@Input() data;
@Input() maxDate;
@Input() minDate;
@Input() formcontrolname;
@Input() formfieldCSS;
@Input() id;
  constructor() { }

  ngOnInit(): void {
  }

  // weekendFilter = (d: Date | null): boolean => {
  //   const day = (d || new Date()).getDay();
  //   return day !== 0 && day !== 6;
  // }
}
