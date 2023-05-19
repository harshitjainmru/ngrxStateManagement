import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() listToShow: any;
  @Input() buttonShow: boolean = false;
  @Input() showList: boolean = false;
  @Input() carouselConfiguration: any;
  @Input() bottomButtonShow:boolean = false
  @ViewChild('myCarousel') carousel!: NguCarousel<any>;
  wait = false;
  ngOnInit() {
    console.log(this.listToShow);
    console.log(this.carouselConfiguration, '123');

    setTimeout(() => {
      this.wait = true;
    }, 500);
  }

  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 500);
    console.log(this.listToShow);
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide: any) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
  ckk() {
    console.log(this.myCarousel);
  }
}
