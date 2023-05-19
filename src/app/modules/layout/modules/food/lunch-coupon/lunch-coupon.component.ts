import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ABS_LAYOUT_PURCHASE_COUPON } from 'src/app/constants/absolute-routes';
import { PURCHASE_COUPON } from 'src/app/constants/text';
import { FoodService } from 'src/app/services/food/food.service';
import { CouponHistoryComponent } from '../coupon-history/coupon-history.component';

@Component({
  selector: 'app-lunch-coupon',
  templateUrl: './lunch-coupon.component.html',
  styleUrls: ['./lunch-coupon.component.scss'],
})
export class LunchCouponComponent implements OnInit {
  uiText = PURCHASE_COUPON;
  amount;
  showTable = false;
  myCalendar = [];
  options = {
    edit: false,
    cancel: true,
  };
  couponLength;
  year;
  Month;
  constructor(
    private _foodCalendarService: FoodService,
    private _dialog: MatDialog,
    private _router: Router,
  ) {
    this.Month = this._foodCalendarService.CurrentMonth
    this.year = this._foodCalendarService.currentYear
  }
  ngOnInit(): void {


    if (this._foodCalendarService.myCalendar.length == 0) {
      this._foodCalendarService.createCalendarData();
      this.myCalendar = this._foodCalendarService.myCalendar;
    } else {
      this.myCalendar = this._foodCalendarService.myCalendar;
    }
    this._foodCalendarService.getAmount().subscribe((res)=>{
      this.amount = res
    })
    this._foodCalendarService.getCouponAvailable().subscribe((count)=>{
      this.couponLength = count
    })
  }

  purchaseCoupons() {
    this._router.navigate([ABS_LAYOUT_PURCHASE_COUPON.fullUrl]);
  }
  updateCalendarData(data: any) {
    this.myCalendar = data;
    this._foodCalendarService.myCalendar = data;
  }

  viewDetails() {
    this._dialog.open(CouponHistoryComponent, {
      minWidth: '29rem',
      minHeight: '50vh',
      disableClose: true,
    });
  }
}
