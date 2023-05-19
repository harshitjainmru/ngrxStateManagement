import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-holiday-calender',
  templateUrl: './holiday-calender.component.html',
  styleUrls: ['./holiday-calender.component.scss']
})
export class HolidayCalenderComponent implements OnInit {

  constructor(private _title:Title) { }

  ngOnInit(): void {
    this._title.setTitle(TITLE.calendar_title)
  }

}
