import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';
import { APPRECIATION_DATA } from 'src/app/constants/text';
import { ViewMoreComponent } from './view-more/view-more.component';

@Component({
  selector: 'app-appreciation',
  templateUrl: './appreciation.component.html',
  styleUrls: ['./appreciation.component.scss']
})
export class AppreciationComponent implements OnInit,AfterViewInit {
appreciationData=APPRECIATION_DATA
dataSource: any = [];
@ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
  ElementRef<HTMLDivElement>
>;
carouselConfig: NguCarouselConfig = {
  grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
  load: 1,
  interval: { timing: 4000, initialDelay: 1000 },
  loop: true,
  touch: true,
  velocity: 0.2,
  easing: 'cubic-bezier(0, 0, 0.2, 1)',
  animation:'lazy'
};
constructor(
  private dialog:MatDialog
) {}

ngOnInit(): void {}
ngAfterViewInit(): void {
  this.listToShow.forEach((item: any) => {
    this.dataSource.push(item);
  });
}
openDialog(item):void{
  console.log(item,'iuten');
  const dialogRef = this.dialog.open(ViewMoreComponent, {
    disableClose:true,
    data:item,
    panelClass:'view'
  })
}
}
