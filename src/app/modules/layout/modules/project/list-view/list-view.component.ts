import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ALL_PROJECT_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  uiText = ALL_PROJECT_DATA;
  dataSource = new MatTableDataSource<any>();
  shortLeaveTime: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.uiText.table_data);
    console.log(this.uiText.table_data, 'table_daat');
  }
  index(i) {
    console.log(i);
  }
}
