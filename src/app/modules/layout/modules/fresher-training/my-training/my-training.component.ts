import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FRESHER_TRAINING_DATA } from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
import { TrainingDataService } from 'src/app/services/training-data.service';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@Component({
  selector: 'app-my-training',
  templateUrl: './my-training.component.html',
  styleUrls: ['./my-training.component.scss']
})
export class MyTrainingComponent implements OnInit {
  headerValue
  constructor(private title:Title, private dialog:MatDialog,private router:Router,private data:TrainingDataService) { }

  ngOnInit(): void {
    this.title.setTitle(TITLE.my_training_title)
    this.headerValue = this.data.headerValue
  }
  openDialog(item):void{
    console.log(item,'feedback');
    const dialogRef = this.dialog.open(FeedbackFormComponent, {
      disableClose:true,
      data:item,
      panelClass: 'feedback-form-dialog-container'
    })
  }
  openJobDetailsInNewWindow(item) {
    // console.log(item,'item');
    // const url = this.router.serializeUrl(
    //   this.router.createUrlTree([`/admin/freshers/training_details_trainee/${item.id}`])
    // );
    // window.open(url, '_blank');
      this.router.navigate([`/admin/freshers/training_details_trainee/${item.id}`])

  }

}
