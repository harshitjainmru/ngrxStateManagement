import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { POLICY_DOCUMENT_HEADING, POLICY_DOCUMENT_VALUES } from 'src/app/constants/tables';
import { TITLE } from 'src/app/constants/title';

@Component({
  selector: 'app-policy-doc',
  templateUrl: './policy-doc.component.html',
  styleUrls: ['./policy-doc.component.scss'],
})
export class PolicyDocComponent implements OnInit {
  headerValue = TITLE.policy_title;
  dataSource = new MatTableDataSource<any>();
  heading = POLICY_DOCUMENT_HEADING
  Table_DATA = POLICY_DOCUMENT_VALUES

  constructor(private _title: Title) {}

  ngOnInit(): void {
    this._title.setTitle(TITLE.policy_title);
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }
}
