import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-coupon-history',
  templateUrl: './coupon-history.component.html',
  styleUrls: ['./coupon-history.component.scss']
})
export class CouponHistoryComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CouponHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }




  tableHeading = [
    'Transaction Date', 'Coupon Date', 'Transaction Type', 'Amount'
  ]

  tableData = [
    {
      transaction_date:'20-03-2022',
      coupon_date:'20-03-2022',
      transaction_type:'Coupon Purchased',
      amount:'+25'
    },
    {
      transaction_date:'20-03-2022',
      coupon_date:'20-03-2022',
      transaction_type:'Coupon Purchased',
      amount:'+25'
    },
    {
      transaction_date:'20-03-2022',
      coupon_date:'20-03-2022',
      transaction_type:'Coupon Purchased',
      amount:'+25'
    },
    {
      transaction_date:'20-03-2022',
      coupon_date:'20-03-2022',
      transaction_type:'Coupon Cancelled',
      amount:'-25'
    },
    {
      transaction_date:'20-03-2022',
      coupon_date:'20-03-2022',
      transaction_type:'Coupon Purchased',
      amount:'+25'
    },
    {
      transaction_date:'20-03-2022',
      coupon_date:'20-03-2022',
      transaction_type:'Coupon Cancelled',
      amount:'-25'
    }
  ]
  onClose() {
    this.dialogRef.close('cancel');
  }
}
