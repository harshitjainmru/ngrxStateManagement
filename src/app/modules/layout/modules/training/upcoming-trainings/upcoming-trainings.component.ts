import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UPCOMING_TRAINING_DATA } from 'src/app/constants/text';
import { CancelEnrollmentComponent } from './cancel-enrollment/cancel-enrollment.component';

@Component({
  selector: 'app-upcoming-trainings',
  templateUrl: './upcoming-trainings.component.html',
  styleUrls: ['./upcoming-trainings.component.scss']
})
export class UpcomingTrainingsComponent implements OnInit {
headerValue = UPCOMING_TRAINING_DATA
  constructor(private dialog : MatDialog,private router:Router) { }

  ngOnInit(): void {
  }

  openDialog():void{
    const dialogRef = this.dialog.open(CancelEnrollmentComponent, {
      disableClose:true,
    })
  }
  openJobDetailsInNewWindow(item) {
    this.router.navigate([`/admin/training_details_trainee/${item.id}`])
    // console.log(item.id,'item');
    // const url = this.router.serializeUrl(
    //   this.router.createUrlTree([`/admin/training_details_trainee/${item.id}`])
    // );

    // window.open(url, '_blank');
  }

}
