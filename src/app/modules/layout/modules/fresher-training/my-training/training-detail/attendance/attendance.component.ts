import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ATTENDANCE_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  uitext
  detailId
  detailData = ATTENDANCE_DATA
  dataSource = new MatTableDataSource<any>();


  constructor(private _activatedRoute:ActivatedRoute) {
    this.detailId = this._activatedRoute.snapshot.paramMap.get('id')
    this.uitext= this.detailData.find(x => x.id ==this.detailId)


  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.uitext.table_data);

  }

}
