import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PROJECT_DATA } from 'src/app/constants/text';
import { AddTagDialogComponent } from './add-tag-dialog/add-tag-dialog.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  detailId
  uiText
  detailData = PROJECT_DATA
  tagData = []
  constructor(private _activatedRoute:ActivatedRoute,private dialog : MatDialog) {

   }

  ngOnInit(): void {
    this.detailId = this._activatedRoute.snapshot.paramMap.get('id')
    console.log(this.detailId,'detail');
    this.uiText= this.detailData.find(x => x.id ==this.detailId)
    console.log(this.uiText,'index')
  }

  openDialog() {

    const dialogRef = this.dialog
      .open(AddTagDialogComponent, {
        disableClose: true,
      }).afterClosed().subscribe((res:any)=>{
        console.log(res);
        this.tagData.unshift(res.add_tag)    // unshift add data in the starting index
        console.log(this.tagData,'tagData');

      })
    }

}
