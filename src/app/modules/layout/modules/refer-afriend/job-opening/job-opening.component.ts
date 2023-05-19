import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JOB_OPENING, LATEST_JOB_OPENING } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
import { ReferACandidateComponent } from '../../home/latest-job-opening/dialogReferACandidate/refer-acandidate/refer-acandidate.component';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss']
})
export class JobOpeningComponent implements OnInit {
  uiMessage = JOB_OPENING;
  cardLogo = LATEST_JOB_OPENING;
  title = TITLE.currentJobOpening_title
  constructor(private _title: Title,private dialog:MatDialog,private router: Router) { }

  ngOnInit(): void {
    this._title.setTitle(this.title);
  }
  openDialog(item):void{
    console.log(item,'iuten');

    const dialogRef = this.dialog.open(ReferACandidateComponent, {
      disableClose:true,
      data:item,
      panelClass: 'refer-candidate-dialog-container',

    })
  }
  openCityInNewWindow(item) {
    console.log(item.id,'item');

    // Converts the route into a string that can be used
    // with the window.open() function
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/admin/refer-candidate/job_details/${item.id}`])
    );

    window.open(url, '_blank');
  }

}
