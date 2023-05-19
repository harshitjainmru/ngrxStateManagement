import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { LATEST_APPINVENTIV } from 'src/app/constants/text';

@Component({
  selector: 'app-latest-appinventiv',
  templateUrl: './latest-appinventiv.component.html',
  styleUrls: ['./latest-appinventiv.component.scss']
})
export class LatestAppinventivComponent implements OnInit,AfterViewInit {
headerValue=LATEST_APPINVENTIV
dataSource: any = [];
listOfComponents = [  {
  id:'appreciation'
},
{
  id:'birthday'
},
{
  id:'awards'
},
{
  id:'work'
},
];
buttonShow: boolean = true;
showList:boolean = true

@ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
  ElementRef<HTMLDivElement>
>;
carouselConfig: NguCarouselConfig = {
  grid: { xs: 1, sm: 1, md: 1, lg: 2, xl:3, all: 0 },
  gridBreakpoints:{sm: 768, md: 992, lg: 1220, xl: 1782},
  load: 2,
  interval: { timing: 4000, initialDelay: 1000 },
  loop: false,
  touch: true,
  velocity: 0.2,
  easing: 'cubic-bezier(0, 0, 0.2, 1)',
  animation:'lazy',
  point: {
    visible: true,
    hideOnSingleSlide: true
  }
};
constructor() {}

ngOnInit(): void {

}
ngAfterViewInit(): void {
  setTimeout(() => {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }, 500);

}

}
