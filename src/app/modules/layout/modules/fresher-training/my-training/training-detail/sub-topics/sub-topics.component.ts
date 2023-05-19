import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { SUBTOPIC_DATA } from 'src/app/constants/text';

@Component({
  selector: 'app-sub-topics',
  templateUrl: './sub-topics.component.html',
  styleUrls: ['./sub-topics.component.scss']
})
export class SubTopicsComponent implements OnInit {
uitext
detailId
detailData  = SUBTOPIC_DATA
dataSource = new MatTableDataSource<any>();

constructor(private _activatedRoute:ActivatedRoute) {
  this.detailId = this._activatedRoute.snapshot.paramMap.get('id')
  this.uitext= this.detailData.find(x => x.id ==this.detailId)


}

ngOnInit(): void {
  this.dataSource = new MatTableDataSource<any>(this.uitext.table_data);

}

}
