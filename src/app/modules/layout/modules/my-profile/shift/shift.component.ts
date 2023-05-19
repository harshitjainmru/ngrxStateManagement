import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { slideInRight } from 'src/animations/slideInRight';
import { SHIFT_HEADING, SHIFT_TABLE_VALUES } from 'src/app/constants/tables';
import { BASIC_INFORMATION } from 'src/app/constants/text';
import { SHIFTTABLE } from 'src/app/models/table-interface';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
  animations:[slideInRight]
})
export class ShiftComponent implements OnInit {
uiMessage=BASIC_INFORMATION
dataSource = new MatTableDataSource<SHIFTTABLE>();
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<SHIFTTABLE>(this.Table_DATA);

  }

  heading =  SHIFT_HEADING
  Table_DATA = SHIFT_TABLE_VALUES

}
