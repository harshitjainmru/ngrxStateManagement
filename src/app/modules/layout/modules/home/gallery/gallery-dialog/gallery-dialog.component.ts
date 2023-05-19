import { AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss']
})
export class GalleryDialogComponent implements OnInit,AfterViewInit{
  buttonShow: boolean = true;
  @ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
    ElementRef<HTMLDivElement>
  >;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md:1, lg: 1, all: 0 },
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
  constructor(
    private dialogRef: MatDialogRef<GalleryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data);

  }
  crossClick() {
    this.dialogRef.close('cancel');
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.listToShow.forEach((item: any) => {
        this.dataSource.push(item);
      });
    }, 0);

  }

}
