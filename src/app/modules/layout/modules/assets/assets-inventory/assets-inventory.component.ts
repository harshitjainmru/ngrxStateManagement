import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ASSETS_INVENTROY_Data, ASSETS_INVENTROY_HEADING } from 'src/app/constants/tables';
import { ASSETS_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-assets-inventory',
  templateUrl: './assets-inventory.component.html',
  styleUrls: ['./assets-inventory.component.scss']
})
export class AssetsInventoryComponent implements OnInit {
uiText = ASSETS_DATA
heading = ASSETS_INVENTROY_HEADING;
table_data = ASSETS_INVENTROY_Data
dataSource = new MatTableDataSource<any>();
  constructor() { }


ngOnInit(): void {
  this.dataSource = new MatTableDataSource<any>(this.table_data);
console.log(this.table_data.length,'wyifgi');


}

}
