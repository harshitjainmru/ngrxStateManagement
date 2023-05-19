import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FLOATING_LEAVE_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-floating-leave',
  templateUrl: './floating-leave.component.html',
  styleUrls: ['./floating-leave.component.scss']
})
export class FloatingLeaveComponent implements OnInit {
uiText = FLOATING_LEAVE_DATA
dataSource = new MatTableDataSource<any>();

constructor() {}

ngOnInit(): void {
  this.dataSource = new MatTableDataSource<any>(this.uiText.table_data);
}

}
