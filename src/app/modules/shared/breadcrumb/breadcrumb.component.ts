import { Component, Input, OnInit } from '@angular/core';
import { BREADCRUMB } from 'src/app/constants/breadCrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() id = '';
  @Input() heading: string='';
  @Input() breadcrumb: string='';
  routes!:any ;
  constructor() {   }
  ngOnInit() {
    setTimeout(() => {

      this.routes = (BREADCRUMB[this.breadcrumb])
    }, 200);
  }

  getRoute(value:string,id:string){
    return `${value}/${id}`
  }

}
