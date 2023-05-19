import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { NguCarouselConfig } from '@ngu/carousel';
import { ABS_LAYOUT_JOB_DETAIL, ABS_LAYOUT_JOB_OPENING } from 'src/app/constants/absolute-routes';
import { JOB_OPENING, LATEST_JOB_OPENING } from 'src/app/constants/text';
import { MatDialog } from '@angular/material/dialog';
import { ReferACandidateComponent } from './dialogReferACandidate/refer-acandidate/refer-acandidate.component';
@Component({
  selector: 'app-latest-job-opening',
  templateUrl: './latest-job-opening.component.html',
  styleUrls: ['./latest-job-opening.component.scss'],
})
export class LatestJobOpeningComponent implements OnInit, AfterViewInit {
  uiMessage = JOB_OPENING;
  cardLogo = LATEST_JOB_OPENING;
  // listOfNewFamilyMembers = [1, 2, 3];
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
  };
    constructor(private _route: Router,
    private dialog: MatDialog,

      ) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }
  routeToJobOpening(){
    this._route.navigate([ABS_LAYOUT_JOB_OPENING.fullUrl])
  }
  openDialog(item):void{
    console.log(item,'iuten');

    const dialogRef = this.dialog.open(ReferACandidateComponent, {
      disableClose:true,
      data:item,
      panelClass: 'refer-candidate-dialog-container',

      // backdropClass:'overlay-dark-backdrop'
    })
  }
  // routeToJobDetails(){
  //   this._route.navigate([`${ABS_LAYOUT_JOB_DETAIL.fullUrl}/{{cardLogo.id}}`])
  // }
}

