import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';
import { Gallery_DATA, GALLER_VALUE } from 'src/app/constants/text';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
headerValue=GALLER_VALUE
imageData=Gallery_DATA
buttonShow: boolean = true;
showList: boolean = true;
@ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
  ElementRef<HTMLDivElement>>;
carouselConfig: NguCarouselConfig = {
  grid: { xs: 1, sm: 1, md:2, lg: 3, xl:3,all: 0 },
  gridBreakpoints:{sm: 468, md: 670, lg: 1200, xl: 1798},
  // gridBreakpoints:{sm: 768, md: 992, lg: 1200, xl: 1798},
  load: 1,
  interval: { timing: 4000, initialDelay: 1000 },
  loop: true,
  touch: true,
  velocity: 0.2,
  point: {
    visible: true,
    hideOnSingleSlide: true
  }
};
dataSource: any = [];

constructor(private dialog:MatDialog) {}

ngOnInit(): void {

}
ngAfterViewInit(): void {
  setTimeout(() => {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }, 500);

}
openDialog(item):void{
  console.log(item,'iuten');
  const dialogRef = this.dialog.open(GalleryDialogComponent, {
    disableClose:true,
    data:item,
    panelClass:'gallery-dialog'
  })
}

}
