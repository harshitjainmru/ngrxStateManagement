import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { INTERVIEW_LIST_HEADING } from 'src/app/constants/tables';
import { INTERVIEW_LIST } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-my-interview',
  templateUrl: './my-interview.component.html',
  styleUrls: ['./my-interview.component.scss'],
})
export class MyInterviewComponent implements OnInit {
  headerValue = INTERVIEW_LIST;
  heading = INTERVIEW_LIST_HEADING;
  dataSource = new MatTableDataSource<any>();
  Table_DATA = [];

  constructor(private _title: Title) {}

  ngOnInit(): void {
    this._title.setTitle(TITLE.interview_list);
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }
}
