import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  ABS_LAYOUT_PROJECT,
  ABS_LAYOUT_PROJECT_DETAILS,
} from 'src/app/constants/absolute-routes';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  showHeader = true;
  selectedList;
  selectedsubmenulist
  text = ['All', 'Ongoing', 'Hold', 'Finished']
  icon = ['grid_on', 'list', 'link'];
  constructor(private _route: Router) {
    this.header();
  }
  header() {
    this._route.events.subscribe((val: any) => {
      if (val instanceof NavigationEnd) {
        if (val.url == `${ABS_LAYOUT_PROJECT.fullUrl}`) {
          this.showHeader = true;
        } else {
          this.showHeader = false;
        }
      }
    });
  }
  ngOnInit(): void {
    this.selectedList = this.icon[1];
    this.selectedsubmenulist = this.text[0]

  }
  opensubmenu(item){
    this.selectedsubmenulist = item
  }

  openMenuList(icon: any) {
    this.selectedList = icon;
    console.log(this.selectedList === 'link');
    this.onclickIcon();
  }
  onclickIcon() {
      if(this.selectedList === 'link'){
        window.open('https://id.atlassian.com/login','_self')
         console.log('true');

      }
  }
}
