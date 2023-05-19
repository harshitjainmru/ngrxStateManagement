import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ABS_LAYOUT_FOOD } from 'src/app/constants/absolute-routes';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { PURCHASE_COUPON } from 'src/app/constants/text';
import { FoodService } from 'src/app/services/food/food.service';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.scss'],
})
export class PurchaseCouponComponent implements OnInit {
  uiText = PURCHASE_COUPON;
  couponForm!: FormGroup;
  amount;
  availableCoupon;
  myCalendar = [];
  updatedCalendar = [];
  options = {
    edit: true,
    cancel: false,
    select: true,
  };
  constructor(
    private _foodCalendarService: FoodService,
    private _utility: UtilityServiceService,
    private route: Router,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myCalendar = this._foodCalendarService.myCalendar;
    console.log(this.myCalendar);

    if (this.myCalendar.length == 0) {
      this.route.navigate([ABS_LAYOUT_FOOD.fullUrl]);
    }
    this.createForm();
    this.couponForm.get('coupon_count').disable();
    this.couponForm.get('total_amount').disable();
    this._foodCalendarService.getAmount().subscribe((res) => {
      this.amount = res;
    });
    this._foodCalendarService.getCouponAvailable().subscribe((res) => {
      this.availableCoupon = res;
    });

    if (!this.availableCoupon) {
      for (let i = 0; i < this.myCalendar.length; i++) {
        for (let j = 0; j < this.myCalendar[i].length; j++) {
          if (this.myCalendar[i][j].hasOwnProperty('booked')) {
            this.availableCoupon++;
            this._foodCalendarService.setCouponAvailable(this.availableCoupon);
          }
        }
      }
    }
  }
  createForm() {
    this.couponForm = this._formBuilder.group({
      coupon_count: [null],
      total_amount: [null],
    });
  }
  get couponFormControl() {
    return this.couponForm?.controls;
  }

  buyCoupons() {
    if (
      (this.couponFormControl['coupon_count'].value == null &&
        this.couponFormControl['total_amount'].value == null) ||
      (this.couponFormControl['coupon_count'].value == 0 &&
        this.couponFormControl['total_amount'].value == 0)
    ) {
      this._utility.showError(MESSAGES.couponerror, '');
    } else {
      this.myCalendar.map((week: any) => {
        week.map((day: any) => {
          if (day.booked == true) {
            day.couponPurchased = true;
          }
        });
      });
      this._utility.showSuccess(MESSAGES.successBoughtCoupon, '');
    }
    this._foodCalendarService.myCalendar = this.myCalendar;
    this.couponForm.reset();
  }
  updateCalendarData(data: any) {
    if (!data.booked && !data.couponPurchased) {
      let couponCount = 0;
      data.map((week: any) => {
        week.map((day: any) => {
          if (day.booked == true) {
            couponCount++;
          }
        });
      });
      this.updatedCalendar = data;
      console.log(this.updatedCalendar);

      this.couponForm.get('coupon_count')?.setValue(couponCount);
      this.couponForm.get('total_amount')?.setValue(couponCount * 25);
      const newAmount = this.couponForm.get('total_amount')?.value;
      this._foodCalendarService.setAmount(newAmount);
    }
  }
  cancelCoupons() {
    this.route.navigate([ABS_LAYOUT_FOOD.fullUrl]);
  }
}
