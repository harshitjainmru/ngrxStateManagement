import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { DSR_DETAIL } from 'src/app/constants/text';
import { GET_DSR_DATA_SELECTOR } from '../../store/dsr.selector';

@Component({
  selector: 'app-dsr-detail',
  templateUrl: './dsr-detail.component.html',
  styleUrls: ['./dsr-detail.component.scss']
})
export class DsrDetailComponent implements OnInit {
uiText = DSR_DETAIL
detailId
dataSource!: MatTableDataSource<any>;
dsr: any;
Table_DATA: any[] = [ ];

  constructor(private _activatedRoute:ActivatedRoute,private store:Store<{Data:any}>) { }

  ngOnInit(): void {
    this.detailId = this._activatedRoute.snapshot?.paramMap?.get('id');
    console.log(this.detailId);

    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.store.select(GET_DSR_DATA_SELECTOR).subscribe((data) => {
      console.log(data,'dsr detail',this.detailId);
      console.log(data[this.detailId],'data[this.detailId]');


      let dsr = data[this.detailId-1];
      console.log(dsr,'data[detailId]');

      dsr = {
        ...dsr,
        // action: [
        //   {
        //     icon: "edit",
        //     btnStyle: "btn_add_new",
        //     btnText: "pending",
        //     route: "DSR_EDIT",
        //     type: "route",
        //     routeID: 121,
        //   },
        // ],
      };
      console.log(dsr,'42');
      this.Table_DATA.push(dsr);
      this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    });
  }


}
