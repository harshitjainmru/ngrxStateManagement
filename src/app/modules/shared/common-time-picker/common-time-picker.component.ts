import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-time-picker',
  templateUrl: './common-time-picker.component.html',
  styleUrls: ['./common-time-picker.component.scss']
})
export class CommonTimePickerComponent implements OnInit {
@Input() data;
@Input() formControlname;
@Input() formFieldCSS;

  constructor() { }

  ngOnInit(): void {
  }

}
