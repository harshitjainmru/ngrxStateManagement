import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TABLE_DATA_UNAVAILABLE } from 'src/app/constants/text';
import { TableColumn } from 'src/app/models/table-interface';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent implements OnInit {
  uiMessage = TABLE_DATA_UNAVAILABLE;
  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  @Input() columns!: any;
  @Input() dataSource: any = [];
  @Input() isPageable = true;
  @Input() isSearchText = true;
  @Output() editEvent: EventEmitter<any> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  @Output() linkIndex: EventEmitter<any> = new EventEmitter();
  @Output() undo_leave: EventEmitter<any> = new EventEmitter();

  public displayedColumns: any = [];
  Date = new Date()
  todayDate =  this.Date.toDateString()
  .substr(4, 12)
  .replace(/\s/g, '-')
  constructor(private route: Router,public sanitizer:DomSanitizer) {}
  ngOnInit(): void {
    this.columns.forEach((item: any) => {
      this.displayedColumns.push(item.heading);
    });
    this.columns.map((tableColumn: TableColumn) => tableColumn.heading);
    // console.log(element[row]);

    // this.dataSource.paginator = this.paginator;
  }
  editButton(item) {
    this.editEvent.emit(item);
  }
  deleteButton(item) {
    this.deleteEvent.emit(item);
  }
  compareDate(date:any){
    let date1=date.split('-');
    let date2=this.todayDate.split('-');
    if(date1[0]>=date2[0] && date1[1]>=date2[1] && date1[2]>=date2[2]){
      return true;
    }
    return false
  }
  check(i, elemnt?) {
    // console.log(i, 'index');
    // const url = this.route.serializeUrl(
    //   this.route.createUrlTree([this.columns[0].link, i])
    // );
    // window.open(url, '_blank');
    // // this.route.navigate([this.columns[0].link,i])
    // this.linkIndex.emit(i);
    this.route.navigate([this.columns[0].link, i]);

  }
  checkaction(element?) {
    // const url = this.route.serializeUrl(
    //   this.route.createUrlTree([this.columns[0].link,i])
    // );
    // window.open(url, '_blank');
    this.route.navigate([this.columns[0].link, element.id]);
    // console.log(element,'element72line', i);

    this.linkIndex.emit(element);
  }
  checkDsrDetail(element?) {
    console.log(element, 'columns');
    console.log(element.id,'dsrdeatils');

    this.columns.forEach(res=>{
      if(res.link){
    this.route.navigate([res.link,element.id])

      }

    })

    // const url = this.route.serializeUrl(
    //   this.route.createUrlTree([this.columns[0].link,i])
    // );
    // window.open(url, '_blank');
    // this.route.navigate([this.columns[0].link,element.id])
    // console.log(element,'element72line', i);

    this.linkIndex.emit(element);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
