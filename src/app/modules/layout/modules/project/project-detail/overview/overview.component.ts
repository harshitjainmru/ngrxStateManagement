import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MY_LEAVE_HEADING, MY_LEAVE__TABLE_DATA } from 'src/app/constants/tables';
import { MY_LEAVE_DATA, OVERVIEW_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  uiText = OVERVIEW_DATA
  requestShow :boolean = false
  dataSource = new MatTableDataSource<any>();
  constructor(
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.uiText.table_data);
  }

}
