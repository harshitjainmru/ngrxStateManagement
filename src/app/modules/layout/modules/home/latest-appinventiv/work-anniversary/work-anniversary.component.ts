import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { WORKANNIVERSARY_EMP_IMAGE_DATA, WORK_ANNIVERSARY_VALUE } from 'src/app/constants/text';

@Component({
  selector: 'app-work-anniversary',
  templateUrl: './work-anniversary.component.html',
  styleUrls: ['./work-anniversary.component.scss']
})
export class WorkAnniversaryComponent implements OnInit,AfterViewInit {
  workAnniversaryValue=WORK_ANNIVERSARY_VALUE
  imageData = WORKANNIVERSARY_EMP_IMAGE_DATA
  dataSource: any = [];
  @ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
    ElementRef<HTMLDivElement>
  >;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 2, all: 0 },
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }

}
